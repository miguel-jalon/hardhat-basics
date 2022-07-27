// function deployFunc() {
//     console.log("Hi!")
// }

// module.exports.defult = deployFunc

const { networkConfig } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdProceFeed"]

    const funding = await deploy("Funding", {
        from: deployer,
        args: [], // PriceFeedAddress
        log: true,
    })
}
