const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x000';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);
  await upgraded.waitForDeployment();
//   const implementationAddress = await upgrades.erc1967.getImplementationAddress(
//     proxyAddress
//   );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Proxy contract address: ' + await upgraded.getAddress());
//   console.log('Implementation contract address: ' + implementationAddress);
}

main();