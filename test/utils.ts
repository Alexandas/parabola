import { ethers } from 'hardhat'

export async function increaseTime(timeToAdd: number) {
	const block = await ethers.provider.getBlock('latest')
	await ethers.provider.send('evm_mine', [timeToAdd + block.timestamp])
}

export const AddressZero = '0x' + Buffer.alloc(20, 0).toString('hex')