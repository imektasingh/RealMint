// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("ParisEthGlobal");
  const token = await hre.ethers.deployContract("ParisEthGlobal", { gasLimit: "0x1000000" });
  
  //const greeter = await Greeter.deploy();

  //await greeter.deployed();
  //console.log("Greeter deployed to: ", greeter.address); // Logs the address to which our contract is deployed
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
