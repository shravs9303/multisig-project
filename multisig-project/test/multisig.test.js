const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  let MultiSigWallet, multisig, owner1, owner2, owner3, recipient;

  beforeEach(async () => {
    [owner1, owner2, owner3, recipient] = await ethers.getSigners();
    MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
    multisig = await MultiSigWallet.deploy(
      [owner1.address, owner2.address, owner3.address],
      2
    );
    await multisig.deployed();

    // Fund with 1 ETH
    await owner1.sendTransaction({ to: multisig.address, value: ethers.utils.parseEther("1") });
  });

  it("should submit and confirm a transaction", async () => {
    await multisig.submitTransaction(recipient.address, ethers.utils.parseEther("0.5"), "0x");
    await multisig.connect(owner1).confirmTransaction(0);
    await multisig.connect(owner2).confirmTransaction(0);
    await multisig.connect(owner1).executeTransaction(0);

    expect(await ethers.provider.getBalance(recipient.address)).to.be.gt(ethers.utils.parseEther("10000")); // default test balance
  });

  it("should not execute without enough confirmations", async () => {
    await multisig.submitTransaction(recipient.address, ethers.utils.parseEther("0.5"), "0x");
    await multisig.connect(owner1).confirmTransaction(0);
    await expect(multisig.connect(owner1).executeTransaction(0)).to.be.revertedWith("cannot execute tx");
  });

  it("should allow revoking confirmation", async () => {
    await multisig.submitTransaction(recipient.address, ethers.utils.parseEther("0.5"), "0x");
    await multisig.connect(owner1).confirmTransaction(0);
    await multisig.connect(owner1).revokeConfirmation(0);
    const tx = await multisig.getTransaction(0);
    expect(tx.numConfirmations).to.equal(0);
  });
});
