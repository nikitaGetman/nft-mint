const { ethers, run } = require("hardhat");

async function main() {
  const RoboPunksNFT = await ethers.getContractFactory("RoboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy();

  console.log("Start deploying...");
  await roboPunksNFT.deployed();

  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);
  console.log("Waiting for 5 confirmations...");

  await ethers.provider.waitForTransaction(
    roboPunksNFT.deployTransaction.hash,
    5,
    150000
  );

  console.log("Confirmed 5 times");
  console.log("Start verification");

  await run("verify:verify", {
    address: roboPunksNFT.address,
    contract: "contracts/RoboPunksNFT.sol:RoboPunksNFT",
  });

  console.log("Contract verified");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
