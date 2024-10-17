import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("StableCoinFactoryModule", (m) => {
  // Get the deployer account (defaults to the first account)
  const deployer = m.getAccount(0);

  // Deploy the StableCoinFactory contract with the deployer as initialOwner
  const stableCoinFactory = m.contract("StableCoinFactory", [deployer]);

  return { stableCoinFactory };
});
