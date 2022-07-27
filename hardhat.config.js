require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.0" },
            { version: "0.8.8" },
            { version: "0.6.6" }
        ]
    },
    defaultNetwork: "hardhat",
    networks: {},

    namedAccounts: {
        deployer: {
            default: 0
        }
    }
}
