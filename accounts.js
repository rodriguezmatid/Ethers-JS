const { ethers } = require("ethers");
require("dotenv").config();

INFURA_ID = process.env.INFURA_ID

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/' + INFURA_ID)

const address = '0xfcE92BDB5D1bBA58A844Cff9dff8A5e680670Ade'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(ethers.utils.formatEther(balance))
}

main()
