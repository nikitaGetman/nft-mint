const { ethers, run } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello world");

  console.log("Start deploying...");
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Waiting for 5 confirmations...");

  await ethers.provider.waitForTransaction(
    greeter.deployTransaction.hash,
    5,
    150000
  );

  console.log("Confirmed 5 times");
  console.log("Start verification");

  await run("verify:verify", {
    address: greeter.address,
    contract: "contracts/Greeter.sol:Greeter",
    constructorArguments: ["Hello world"],
  });

  console.log("Contract verified");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
