const { ethers } = require("hardhat");

async function main() {
	const Voting = await ethers.getContractFactory("Voting");

	// Start deployment, returning a promise that resolves to a contract object
	const Voting_ = await Voting.deploy(
		["bjp", "ncp", "inc", "mns", "ss", "nota"],
		4500
	);
	console.log("Contract address:", Voting_.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});

// npx hardhat compile
// npx hardhat run --network sepolia scripts/deploy.js
