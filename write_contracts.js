const { ethers } = require("ethers");
const { addEmitHelpers } = require("typescript");

require("dotenv").config();

INFURA_ID = process.env.INFURA_ID

const provider = new ethers.providers.JsonRpcProvider('https://kovan.infura.io/v3/' + INFURA_ID)

const account 1 = ''
const account 2 = ''

const privateKey1 = process.env.PRIVATEKEY1

const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]

const address = ''
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const contractWithWallet = contract.connect(wallet)
    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)
    
}

main()