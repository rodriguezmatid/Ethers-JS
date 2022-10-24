const { ethers } = require("ethers");
require("dotenv").config();

INFURA_ID = process.env.INFURA_ID

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/' + INFURA_ID)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // Dai Contract

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()

    console.log('\nReading from ' + address)
    console.log('name:', name)
    console.log('symbol:', symbol)
    console.log('total Supply:', ethers.utils.formatEther(totalSupply))

    const balance = await contract.balanceOf('0xfcE92BDB5D1bBA58A844Cff9dff8A5e680670Ade')
    console.log('Balance returned:', ethers.utils.formatEther(balance))
}

main()