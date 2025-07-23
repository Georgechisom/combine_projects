import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const { WALLET_KEY, SEPOLIA_API_KEY, SEPOLIA_URL_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_URL_KEY,
      accounts: [WALLET_KEY],
    },
  },
  etherscan: {
    apiKey: SEPOLIA_API_KEY as string,
  },
};

export default config;
