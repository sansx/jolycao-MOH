// deploy/00_deploy_your_contract.js

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  let nContract = await deploy("N", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  });

  let proxyAdminContract = await deploy("ProxyAdminMOH", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  });

  let transparentUpgradeableProxyContract = await deploy("TransparentUpgradeableProxyMOH", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [nContract.address, proxyAdminContract.address,"0x8129fc1c"],
    log: true,
  });
};

module.exports.tags = ["N","ProxyAdminMOH","TransparentUpgradeableProxyMOH"];