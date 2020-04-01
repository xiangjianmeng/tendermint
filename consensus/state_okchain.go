package consensus

import (
	"fmt"
	"time"

	cstypes "github.com/tendermint/tendermint/consensus/types"
	"github.com/tendermint/tendermint/libs/log"
)

/*
性能采集struct， 仅用于consensusstate测试
*/
type coreData struct {
	NewRoundStepTime    int64
	NewRoundStepTimeEnd int64
	ProposeStepTime     int64
	ProposeStepTimeEnd  int64
	PrevoteStepTime     int64
	PrevoteStepWaitTime int64
	PrevoteStepTimeEnd  int64
	PrecommitTime       int64
	PrecommitWaitTime   int64
	PrecommitTimeEnd    int64
	CommitTime          int64
	CommitTimeEnd       int64

	//record some info

	prevoteSteps      int //how many times process prevote
	prevoteAddr       []string
	precommitSteps    int //...
	precommitAddr     []string
	ProposeNode       string //propose peer
	numberofValidator int    //block validator
	isOurPropose      bool
}

type consensusTracker struct {
	coreTracker  map[int64]*coreData
	TrackerStart int
	l            log.Logger
}

func (c *consensusTracker) IncCount(height int64, opt int, addr string) {
	core := c.coreTracker[height]
	if core != nil {
		switch opt {
		case 0:
			core.prevoteSteps++
			core.prevoteAddr = append(core.prevoteAddr, addr)
			break
		case 1:
			core.precommitSteps++
			core.precommitAddr = append(core.precommitAddr, addr)
			break
		}
	}
}

func (c *consensusTracker) setBlockPeer(height int64, peer string) {
	core := c.coreTracker[height]
	if core != nil {
		core.ProposeNode = peer
	}
}

func (c *consensusTracker) setIsOurTurn(height int64, bTurn bool) {
	core := c.coreTracker[height]
	if core != nil {
		core.isOurPropose = bTurn
	}
}

func newCoreData() *coreData {
	return &coreData{}
}

func (c *consensusTracker) set(height int64, r cstypes.RoundStepType, begin bool) {
	if c.TrackerStart == 0 {
		return
	}
	core := c.coreTracker[height]
	if core == nil {
		//gen new data
		core = newCoreData()
		c.coreTracker[height] = core
	}
	switch r {
	case cstypes.RoundStepNewRound:
		if begin {
			core.NewRoundStepTime = time.Now().UnixNano() / 1e6
		} else {
			core.NewRoundStepTimeEnd = time.Now().UnixNano() / 1e6
		}
		break
	case cstypes.RoundStepPropose:
		if begin {
			core.ProposeStepTime = time.Now().UnixNano() / 1e6
		} else {
			core.ProposeStepTimeEnd = time.Now().UnixNano() / 1e6
		}
		break
	case cstypes.RoundStepPrevote:
		if begin {
			core.PrevoteStepTime = time.Now().UnixNano() / 1e6
		} else {
			core.PrevoteStepTimeEnd = time.Now().UnixNano() / 1e6
		}
		break
	case cstypes.RoundStepPrecommit:
		if begin {
			core.PrecommitTime = time.Now().UnixNano() / 1e6
		} else {
			core.PrecommitTimeEnd = time.Now().UnixNano() / 1e6
		}
		break
	case cstypes.RoundStepCommit:
		if begin {
			core.CommitTime = time.Now().UnixNano() / 1e6
		} else {
			core.CommitTimeEnd = time.Now().UnixNano() / 1e6
		}
		break
	case cstypes.RoundStepPrevoteWait:
		core.PrevoteStepWaitTime = time.Now().UnixNano() / 1e6
		break
	case cstypes.RoundStepPrecommitWait:
		core.PrecommitWaitTime = time.Now().UnixNano() / 1e6
		break
	default:
		break
	}
}

func (c *consensusTracker) calcSeg(startTime int64, endTime int64) int64 {
	if startTime == 0 || endTime == 0 {
		return 0
	}
	return endTime - startTime
}

func (c *consensusTracker) Display(height int64) {
	if c.TrackerStart == 0 {
		return
	}

	if c.l == nil {
		return
	}

	core := c.coreTracker[height]
	if core == nil {
		fmt.Println(fmt.Sprintf("No data for heignt %v", height))
		return
	}

	total := c.calcSeg(core.NewRoundStepTime, core.NewRoundStepTimeEnd) + c.calcSeg(core.ProposeStepTime, core.ProposeStepTimeEnd) +
		c.calcSeg(core.PrevoteStepTime, core.PrevoteStepTimeEnd) + c.calcSeg(core.PrecommitTime, core.PrecommitTimeEnd) + c.calcSeg(core.CommitTime, core.CommitTimeEnd)

	/*logString := fmt.Sprintf("Height: %v \nRoundStepNewRound: time %v - %v = %v\nRoundStepPropose: time %v - %v = %v\nRoundStepPrevote: time %v - %v = %v\nRoundStepPrecommit: time %v - %v = %v\nRoundStepCommit: time %v - %v = %v\nRoundStepPrecommitWait = %v, RoundStepPrecommitWait = %v",
		height,core.NewRoundStepTime,core.NewRoundStepTimeEnd,c.calcSeg(core.NewRoundStepTime, core.NewRoundStepTimeEnd),
		core.ProposeStepTime,core.ProposeStepTimeEnd,c.calcSeg(core.ProposeStepTime, core.ProposeStepTimeEnd),
		core.PrevoteStepTime,core.PrevoteStepTimeEnd,c.calcSeg(core.PrevoteStepTime, core.PrevoteStepTimeEnd),
		core.PrecommitTime,core.PrecommitTimeEnd,c.calcSeg(core.PrecommitTime, core.PrecommitTimeEnd),
		core.CommitTime,core.CommitTimeEnd,c.calcSeg(core.CommitTime, core.CommitTimeEnd),
		core.PrevoteStepWaitTime,core.PrecommitWaitTime,
	)



	moreinfo := fmt.Sprintf("Height：%v \nRoundStepNewRound<%vms>\tRoundStepPropose<%vms>\tRoundStepPrevote<%vms>\tRoundStepPrevoteWait<%vms>\tRoundStepPrecommit<%vms>\tRoundStepPrecommitWait<%vms>\tRoundStepCommit<%vms>",
		height,c.calcSeg(core.NewRoundStepTime, core.NewRoundStepTimeEnd),
		c.calcSeg(core.ProposeStepTime, core.ProposeStepTimeEnd),
		c.calcSeg(core.PrevoteStepTime, core.PrevoteStepTimeEnd),
		c.calcSeg(core.PrevoteStepWaitTime, core.PrevoteStepTimeEnd),
		c.calcSeg(core.PrecommitTime, core.PrecommitTimeEnd),
		c.calcSeg(core.PrecommitWaitTime, core.PrecommitTimeEnd),
		c.calcSeg(core.CommitTime, core.CommitTimeEnd),
	)

	*/

	ourTurn := " *is our node propose this block"
	if core.isOurPropose {
		ourTurn = " #is not our node propose it"
	}

	logFunc := c.l.Debug
	if total > 10000 { //more than 10s, Print log info by Info
		logFunc = c.l.Info
	}

	logFunc("================================================consensus tracker=========================================================")

	logFunc(fmt.Sprintf("Height：[%v] - RoundStepNewRound<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.NewRoundStepTime, core.NewRoundStepTimeEnd), core.NewRoundStepTime, core.NewRoundStepTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - RoundStepPropose<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.ProposeStepTime, core.ProposeStepTimeEnd), core.ProposeStepTime, core.ProposeStepTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - RoundStepPrevote<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.PrevoteStepTime, core.PrevoteStepTimeEnd), core.PrevoteStepTime, core.PrevoteStepTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - RoundStepPrevoteWait<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.PrevoteStepWaitTime, core.PrevoteStepTimeEnd), core.PrevoteStepWaitTime, core.PrevoteStepTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - RoundStepPrecommit<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.PrecommitTime, core.PrecommitTimeEnd), core.PrecommitTime, core.PrecommitTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - RoundStepPrecommitWait<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.PrecommitWaitTime, core.PrecommitTimeEnd), core.PrecommitWaitTime, core.PrecommitTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - RoundStepCommit<%vms>,S:%vms,E:%vms", height, c.calcSeg(core.CommitTime, core.CommitTimeEnd), core.CommitTime, core.CommitTimeEnd))
	logFunc(fmt.Sprintf("Height：[%v] - Total Time [%v ms]", height, total))
	logFunc(fmt.Sprintf("Height：[%v] - block prevote <%v> times, precommit <%v> times, propose peer: <%v>,%v", height, core.prevoteSteps, core.precommitSteps, core.ProposeNode, ourTurn))

	for _, addr := range core.prevoteAddr {
		logFunc(fmt.Sprintf("Height：[%v] - Prevote peer:[%v]", height, addr))
	}

	for _, addr := range core.precommitAddr {
		logFunc(fmt.Sprintf("Height：[%v] - Precommit peer:[%v]", height, addr))
	}

	if total > 1000 {
		logFunc("Height：[%v] - Timeout Alert! consensus more than 1s@", height)
	}
	logFunc("==============================================end consensus tracker=======================================================")

	//free displayed mem
	if height > 0 && len(c.coreTracker) > 2 {
		c.earse(height - 1)
	}

}

func (c *consensusTracker) earse(height int64) {
	delete(c.coreTracker, height)
}

var g_consensusTracker = &consensusTracker{make(map[int64]*coreData), 1, nil}

//------------end of
func (cs *ConsensusState) calcProcessingTime(height int64, stepType cstypes.RoundStepType) {
	core := g_consensusTracker.coreTracker[height]
	if core == nil {
		core = newCoreData()
		g_consensusTracker.coreTracker[height] = core
	}
	switch stepType {
	case cstypes.RoundStepNewRound:
		cs.metrics.NewRoundProcessingTime.Set(float64(g_consensusTracker.calcSeg(core.NewRoundStepTime, core.NewRoundStepTimeEnd)))
	case cstypes.RoundStepPropose:
		cs.metrics.ProposeProcessingTime.Set(float64(g_consensusTracker.calcSeg(core.ProposeStepTime, core.ProposeStepTimeEnd)))
	case cstypes.RoundStepPrevote:
		cs.metrics.PrevoteProcessingTime.Set(float64(g_consensusTracker.calcSeg(core.PrevoteStepTime, core.PrevoteStepTimeEnd)))
	case cstypes.RoundStepPrecommit:
		cs.metrics.PrecommitProcessingTime.Set(float64(g_consensusTracker.calcSeg(core.PrecommitTime, core.PrecommitTimeEnd)))
	case cstypes.RoundStepCommit:
		cs.metrics.CommitProcessingTime.Set(float64(g_consensusTracker.calcSeg(core.CommitTime, core.CommitTimeEnd)))
	default:
		break
	}
}
