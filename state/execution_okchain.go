package state

import (
	"fmt"
	"github.com/spf13/viper"
	"os"
	"path/filepath"
	"strconv"
)

const (
	UpgradeFailureTagKey = "upgrade_failure"
)



func (blockExec *BlockExecutor) backupState(state State) {

	backupPerHeight := viper.GetInt64("backup")

	if backupPerHeight != 0 && (state.LastBlockHeight)%backupPerHeight == 0 {
		historyPath := filepath.Join(viper.GetString("home"), "state_history", strconv.FormatInt(state.LastBlockHeight, 10))
		okchaindDataDir := filepath.Join(viper.GetString("home"), "data")
		exist, err := pathExists(historyPath)

		if err != nil {
			blockExec.logger.Error(fmt.Sprintf("cannot judge if %s exists. error: %s", historyPath, err.Error()))
		}
		if exist {
			err := DeleteStateData(historyPath)
			if err != nil {
				blockExec.logger.Error(fmt.Sprintf("cannot delete old history %s . error: %s", historyPath, err.Error()))
			} else {
				blockExec.logger.Info(fmt.Sprintf("delete old history %s successfully", historyPath))
			}
		}

		_, err = CopySourceToHistory(okchaindDataDir, historyPath)
		if err != nil {
			blockExec.logger.Error(fmt.Sprintf("Failed to copy ./data to ./state_history/%d. Error: %s", state.LastBlockHeight, err))
		} else {
			blockExec.logger.Info("Copy sourceData to history successfully")
		}
	}
}

func pathExists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}

