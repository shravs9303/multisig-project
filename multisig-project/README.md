
# 📝 Multi-Signature Wallet (Multi-Sig) — Solidity + Hardhat + Ethers.js + React

## 📌 Overview

This project implements a **Multi-Signature Wallet (Multi-Sig)** smart contract similar to **Gnosis Safe** but simplified for learning and demonstration purposes.
A **multi-sig wallet** requires **M out of N owners** to approve a transaction before it can be executed, adding **security, decentralization, and trust minimization** to asset management.

This repository contains:

* ✅ A well-structured **Solidity contract** with security best practices
* ✅ **Hardhat scripts** for deployment and interaction
* ✅ **Mocha/Chai tests** to ensure correctness and edge case handling
* ✅ A minimal **frontend (HTML/JS with Ethers.js)** for wallet interaction
* ✅ Detailed documentation for setup, deployment, and testing

---

## 🔐 Why Multi-Sig?

In traditional single-signature wallets, one private key controls the funds. If compromised, **all funds are at risk**.
With multi-signature:

* Transactions require approval from multiple owners.
* Reduces the risk of a single point of failure.
* Commonly used for **DAOs, treasury management, corporate accounts, and escrow services**.

**Example use case:**
A DAO treasury with 5 owners may require **3 confirmations (M=3)** before releasing funds. This prevents one malicious actor from draining the wallet.

---

## 🛠️ Tech Stack

* **Smart Contract:** Solidity `^0.8.17`
* **Framework:** Hardhat
* **Library:** Ethers.js
* **Testing:** Mocha + Chai
* **Frontend:** Minimal HTML/JS with Ethers.js (React/Next.js optional)
* **Node.js:** LTS version recommended

---


## 📜 Smart Contract Features

* Multiple wallet owners
* Configurable **M-of-N** confirmation requirement
* Submit transactions (with target, value, and calldata)
* Confirm, revoke, and execute transactions
* ETH deposits using `receive()`
* Strong **security checks & modifiers**:

  * `onlyOwner` → only wallet owners can act
  * `txExists` → ensures valid transaction index
  * `notExecuted` → prevents double execution
  * `notConfirmed` → prevents duplicate confirmations

---



## 🧪 Testing

We use **Mocha + Chai** with Hardhat’s built-in network for testing.
The test suite covers:

* ✅ Transaction submission
* ✅ Confirmation workflow
* ✅ Revoke confirmation
* ✅ Execution success/failure cases
* ✅ Edge cases (not enough confirmations, already executed tx)



## 🔥 Example Workflow

1. **Submit Transaction**
   Owner1 proposes sending `0.5 ETH` to `recipient`.

2. **Confirm Transaction**
   Owner1 and Owner2 confirm.

3. **Execute Transaction**
   Transaction executed only after required confirmations (2-of-3).

If Owner3 tries to execute without enough confirmations → ❌ **Reverted**.

---

## 📚 Learning Outcomes

By building this project you’ll learn:

* ✅ Advanced **Solidity patterns** (structs, mappings, modifiers, events)
* ✅ **Security best practices** (checks-effects-interactions, preventing re-entrancy)
* ✅ **Hardhat workflow** (compile, test, deploy, local node)
* ✅ **Testing with Mocha/Chai** (assertions, reverting conditions)
* ✅ **Frontend dApp integration** with Ethers.js & MetaMask

---

## 🏆 Real-World Relevance

* DAO treasury management
* Secure exchange wallets
* Corporate multi-owner accounts
* Escrow services


