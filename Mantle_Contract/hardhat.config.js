require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

console.log(process.env.PRIV_KEY);
PRIV_KEY="0xd2ab6e77539c6d2ba90f19b217e26e4fad301e5066445514b4b63cba0fc80b6c";
module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [PRIV_KEY],
    }
  }
};