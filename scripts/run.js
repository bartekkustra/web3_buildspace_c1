const main = async() => {
  let cookiesCount;
  let cookieAction;

  const [owner, randomPerson] = await hre.ethers.getSigners();
  const cookiesContractFactory = await hre.ethers.getContractFactory('CookiePortal')
  const cookiesContract = await cookiesContractFactory.deploy()
  await cookiesContract.deployed()

  console.log('From:', cookiesContract.address, 'To:', owner.address)

  cookiesCount = await cookiesContract.getTotalCookies();

  cookieAction = await cookiesContract.bakeCookies();
  await cookieAction.wait();

  cookieAction = await cookiesContract.connect(randomPerson).bakeCookies();
  await cookieAction.wait();

  cookiesCount = await cookiesContract.getTotalCookies();
}

const runMain = async() => {
  try {
    await main()
    process.exit(0)
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

runMain()