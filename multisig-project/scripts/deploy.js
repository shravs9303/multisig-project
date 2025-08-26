const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();

  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
  const multisig = await MultiSigWallet.deploy(
    [owner1.address, owner2.address, owner3.address],
    2
  );

  await multisig.deployed();
  console.log(`MultiSigWallet deployed to: ${multisig.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
