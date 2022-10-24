const { ethers } = require("ethers");
const { addEmitHelpers } = require("typescript");

require("dotenv").config();

INFURA_ID = process.env.INFURA_ID

const provider = new ethers.providers.JsonRpcProvider('https://kovan.infura.io/v3/' + INFURA_ID)

const account 1 = ''
const account 2 = ''

const privateKey1 = process.env.PRIVATEKEY1

const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    // Show account 1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1)
    // Show account 2 balance before transfer
    const receiverBalanceBefore = await provider.getBalance(account2)

    // Send ether
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther('0.025')
    })

    await tx.wait()
    console.log(tx)

    // Show account 1 balance after transfer
    const senderBalanceAfter = await provider.getBalance(account1)

    // Show account 2 balance after transfer
    const receiverBalanceAfter = await provider.getBalance(account2)

    console.log('\nSender balance after: ' + ethers.utils.formatEther(senderBalanceAfter))
    console.log('\nSender balance after: ' + ethers.utils.formatEther(receiverBalanceAfter))
}