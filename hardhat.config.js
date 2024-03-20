require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url:"https://crimson-still-tree.ethereum-sepolia.quiknode.pro/e8bd5294588e0f69a20e8ccea2da5aeea1a22e7a/",
      accounts: ["ccb48b41f481e5579917b12ba1b631a27697254a0c9c418850617a0491883f5c"],
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  
}