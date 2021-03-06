(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{816:function(e,t,s){"use strict";s.r(t);var n=s(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rfc-001-end-to-end-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rfc-001-end-to-end-testing"}},[e._v("#")]),e._v(" RFC 001: End-to-End Testing")]),e._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("2020-09-07: Initial draft (@erikgrinaker)")])]),e._v(" "),s("li",[s("p",[e._v("2020-09-08: Minor improvements (@erikgrinaker)")])])]),e._v(" "),s("h2",{attrs:{id:"authors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[e._v("#")]),e._v(" Authors")]),e._v(" "),s("ul",[s("li",[e._v("Erik Grinaker (@erikgrinaker)")])]),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("The current set of end-to-end tests under "),s("code",[e._v("test/")]),e._v(" are very limited, mostly focusing on P2P testing in a standard configuration. They do not test various configurations (e.g. fast sync reactor versions, state sync, block pruning, genesis vs InitChain setup), nor do they test various network topologies (e.g. sentry node architecture). This leads to poor test coverage, which has caused several serious bugs to go unnoticed.")]),e._v(" "),s("p",[e._v("We need an end-to-end test suite that can run a large number of combinations of configuration options, genesis settings, network topologies, ABCI interactions, and failure scenarios and check that the network is still functional. This RFC outlines the basic requirements and design considerations, but does not propose a specific implementation - a later ADR will be submitted for this.")]),e._v(" "),s("p",[e._v("This RFC will not cover comprehensive chaos testing, only a few simple scenarios (e.g. abrupt process termination and network partitioning). Chaos testing of the core consensus algorithm should be implemented e.g. via Jepsen tests or a similar framework, or alternatively be added to these end-to-end tests at a later time. Similarly, malicious or adversarial behavior is out of scope for the first implementation, but may be added later.")]),e._v(" "),s("h2",{attrs:{id:"proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),s("h3",{attrs:{id:"functional-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functional-coverage"}},[e._v("#")]),e._v(" Functional Coverage")]),e._v(" "),s("p",[e._v("The following lists the functionality we would like to test:")]),e._v(" "),s("h4",{attrs:{id:"environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[e._v("#")]),e._v(" Environments")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Topology:")]),e._v(" single node, 4 nodes (seeds and persistent), sentry architecture, NAT (UPnP)")]),e._v(" "),s("li",[s("strong",[e._v("Networking:")]),e._v(" IPv4, IPv6")]),e._v(" "),s("li",[s("strong",[e._v("ABCI connection:")]),e._v(" UNIX socket, TCP, gRPC")]),e._v(" "),s("li",[s("strong",[e._v("PrivVal:")]),e._v(" file, UNIX socket, TCP")])]),e._v(" "),s("h4",{attrs:{id:"node-app-configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-app-configurations"}},[e._v("#")]),e._v(" Node/App Configurations")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Database:")]),e._v(" goleveldb, cleveldb, boltdb, rocksdb, badgerdb")]),e._v(" "),s("li",[s("strong",[e._v("Fast sync:")]),e._v(" disabled, v0, v1, v2")]),e._v(" "),s("li",[s("strong",[e._v("State sync:")]),e._v(" disabled, enabled")]),e._v(" "),s("li",[s("strong",[e._v("Block pruning:")]),e._v(" none, keep 20, keep 1, keep random")]),e._v(" "),s("li",[s("strong",[e._v("Role:")]),e._v(" validator, full node")]),e._v(" "),s("li",[s("strong",[e._v("App persistence:")]),e._v(" enabled, disabled")])]),e._v(" "),s("h4",{attrs:{id:"geneses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geneses"}},[e._v("#")]),e._v(" Geneses")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Validators:")]),e._v(" none (InitChain), given")]),e._v(" "),s("li",[s("strong",[e._v("Initial height:")]),e._v(" 1, 1000")]),e._v(" "),s("li",[s("strong",[e._v("App state:")]),e._v(" none, given")])]),e._v(" "),s("h4",{attrs:{id:"behaviors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviors"}},[e._v("#")]),e._v(" Behaviors")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Recovery:")]),e._v(" stop/start, power cycling, validator outage, network partition, total network loss")]),e._v(" "),s("li",[s("strong",[e._v("Validators:")]),e._v(" add, remove, change power")])]),e._v(" "),s("h3",{attrs:{id:"functional-combinations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functional-combinations"}},[e._v("#")]),e._v(" Functional Combinations")]),e._v(" "),s("p",[e._v("Running separate tests for all combinations of the above functionality is not feasible, as there are millions of them. However, the functionality can be grouped into three broad classes:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Global:")]),e._v(" affects the entire network, needing a separate testnet for each combination (e.g. topology, network protocol, genesis settings)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Local:")]),e._v(" affects a single node, and can be varied per node in a testnet (e.g. ABCI/privval connections, database backend, block pruning)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Temporal:")]),e._v(" can be run after each other in the same testnet (e.g. recovery and validator changes)")])])]),e._v(" "),s("p",[e._v("Thus, we can run separate testnets for all combinations of global options (on the order of 100). In each testnet, we run nodes with randomly generated node configurations optimized for broad coverage (i.e. if one node is using GoLevelDB, then no other node should use it if possible). And in each testnet, we sequentially and randomly pick nodes to stop/start, power cycle, add/remove, disconnect, and so on.")]),e._v(" "),s("p",[e._v("All of the settings should be specified in a testnet configuration (or alternatively the seed that generated it) such that it can be retrieved from CI and debugged locally.")]),e._v(" "),s("p",[e._v("A custom ABCI application will have to be built that can exhibit the necessary behavior (e.g. make validator changes, prune blocks, enable/disable persistence, and so on).")]),e._v(" "),s("h3",{attrs:{id:"test-stages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-stages"}},[e._v("#")]),e._v(" Test Stages")]),e._v(" "),s("p",[e._v("Given a test configuration, the test runner has the following stages:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Setup:")]),e._v(" configures the Docker containers and networks, but does not start them.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Initialization:")]),e._v(" starts the Docker containers, performs fast sync/state sync.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Perturbation:")]),e._v(" adds/removes validators, restarts nodes, perturbs networking, etc - liveness and readiness checked between each operation.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Testing:")]),e._v(" runs RPC tests independently against all network nodes, making sure data matches expectations and invariants hold.")])])]),e._v(" "),s("h3",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[e._v("#")]),e._v(" Tests")]),e._v(" "),s("p",[e._v("The general approach will be to put the network through a sequence of operations (see stages above), check basic liveness and readiness after each operation, and then once the network stabilizes run an RPC test suite against each node in the network.")]),e._v(" "),s("p",[e._v("The test suite will do black-box testing against a single node's RPC service. We will be testing the behavior of the network as a whole, e.g. that a fast synced node correctly catches up to the chain head and serves basic block data via RPC. Thus the tests will not send e.g. P2P messages or examine the node database, as these are considered internal implementation details - if the network behaves correctly, presumably the internal components function correctly. Comprehensive component testing (e.g. each and every RPC method parameter) should be done via unit/integration tests.")]),e._v(" "),s("p",[e._v("The tests must take into account the node configuration (e.g. some nodes may be pruned, others may not be validators), and should somehow be provided access to expected data (i.e. complete block headers for the entire chain).")]),e._v(" "),s("p",[e._v("The test suite should use the Tendermint RPC client and the Tendermint light client, to exercise the client code as well.")]),e._v(" "),s("h3",{attrs:{id:"implementation-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-considerations"}},[e._v("#")]),e._v(" Implementation Considerations")]),e._v(" "),s("p",[e._v("The testnets should run in Docker Compose, both locally and in CI. This makes it easier to reproduce test failures locally. Supporting multiple test-runners (e.g. on VMs or Kubernetes) is out of scope. The same image should be used for all tests, with configuration passed via a mounted volume.")]),e._v(" "),s("p",[e._v("There does not appear to be any off-the-shelf solutions that would do this for us, so we will have to roll our own on top of Docker Compose. This gives us more flexibility, but is estimated to be a few weeks of work.")]),e._v(" "),s("p",[e._v("Testnets should be configured via a YAML file. These are used as inputs for the test runner, which e.g. generates Docker Compose configurations from them. An additional layer on top should generate these testnet configurations from a YAML file that specifies all the option combinations to test.")]),e._v(" "),s("p",[e._v("Comprehensive testnets should run against master nightly. However, a small subset of representative testnets should run for each pull request, e.g. a four-node IPv4 network with state sync and fast sync.")]),e._v(" "),s("p",[e._v("Tests should be written using the standard Go test framework (and e.g. Testify), with a helper function to fetch info from the test configuration. The test runner will run the tests separately for each network node, and the test must vary its expectations based on the node's configuration.")]),e._v(" "),s("p",[e._v("It should be possible to launch a specific testnet and run individual test cases from the IDE or local terminal against a it.")]),e._v(" "),s("p",[e._v("If possible, the existing "),s("code",[e._v("testnet")]),e._v(" command should be extended to set up the network topologies needed by the end-to-end tests.")]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("p",[e._v("Accepted")]),e._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Comprehensive end-to-end test coverage of basic Tendermint functionality, exercising common code paths in the same way that users would")])]),e._v(" "),s("li",[s("p",[e._v("Test environments can easily be reproduced locally and debugged via standard tooling")])])]),e._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Limited coverage of consensus correctness testing (e.g. Jepsen)")])]),e._v(" "),s("li",[s("p",[e._v("No coverage of malicious or adversarial behavior")])]),e._v(" "),s("li",[s("p",[e._v("Have to roll our own test framework, which takes engineering resources")])]),e._v(" "),s("li",[s("p",[e._v("Possibly slower CI times, depending on which tests are run")])]),e._v(" "),s("li",[s("p",[e._v("Operational costs and overhead, e.g. infrastructure costs and system maintenance")])])]),e._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),s("ul",[s("li",[e._v("No support for alternative infrastructure platforms, e.g. Kubernetes or VMs")])]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5291",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5291: new end-to-end test suite"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);