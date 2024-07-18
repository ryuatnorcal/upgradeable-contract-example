import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify";
import '@openzeppelin/hardhat-upgrades';
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    local: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY as string],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};

export default config;
