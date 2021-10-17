const main = async() => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log('Deploying contracts with account: ', deployer.address);
  console.log('Account balance:\t', accountBalance.toString());

  const Token = await hre.ethers.getContractFactory('CookiePortal');
  const portal = await Token.deploy();
  await portal.deployed();

  console.log('\nCookiePortal address: ', portal.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
}

runMain();