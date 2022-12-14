require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/7cd4731a3be74a6ab7c32fe799ab3177",
      accounts: [process.env.mnemonic],
      chainId: 4,
      live: true,
      saveDeployments: true
      // tags: ["staging"],
      // gasPrice: 5000000000,
      // gasMultiplier: 2,
    },
    polygontestnet: {
      url: "https://polygon-mumbai.infura.io/v3/e0737333518f412892d21b1762e8fe47",
      accounts: [process.env.mnemonic],
      chainId: 80001,
      live: true,
      saveDeployments: true
      // tags: ["staging"],
      // gasPrice: 5000000000,
      // gasMultiplier: 2,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/7cd4731a3be74a6ab7c32fe799ab3177`,
      accounts: [process.env.mnemonic],
      gasPrice: 120 * 1000000000
      // chainId: 1,
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    // tests: "./test",s
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    apiKey: "BPN7F7YIVAEVCHN3WI1SFZ73EKAR8FQ49Z"
  },
  mocha: {
    timeout: 20000
  }
};
