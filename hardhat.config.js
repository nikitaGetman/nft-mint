require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.REACT_APP_GOERLI_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
    ropsten: {
      url: "https://speedy-nodes-nyc.moralis.io/9333c4879735cf8b47c5c703/eth/ropsten",
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.REACT_APP_MUMBAI_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.REACT_APP_GOERLI_ETHERSCAN_KEY,
      mumbai: process.env.REACT_APP_MUMBAI_ETHERSCAN_KEY,
    },
    customChains: [
      {
        network: "goerli",
        chainId: 4,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api",
          browserURL: "https://goerli.etherscan.io",
        },
      },
      {
        network: "mumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api-testnet.polygonscan.com/api",
          browserURL: "https://mumbai.polygonscan.com/",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
