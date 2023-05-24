import chai, { expect } from 'chai'
import { BigNumber, Signer, utils } from 'ethers'
import { solidity } from 'ethereum-waffle'
import { ethers } from 'hardhat'
import {
	Parabola,
	Parabola__factory
} from '../types'

chai.use(solidity)

describe('Parabola', () => {
	let signers: Signer[]
	let token: Parabola

	beforeEach(async () => {
		signers = await ethers.getSigners()
		token = await new Parabola__factory(signers[0]).deploy(utils.parseEther('100000000'), utils.parseEther('0.01'))
	})

	it('check volume', async () => {
		const step = await token.step()
		const interAxisX = await token.interAxisX()
		const v1 = await token.volume(0, step)
		console.log('v1', v1.toString())
		const v2 = await token.volume(interAxisX.sub(step), interAxisX)
		console.log('v2', v2.toString())
		let s = BigNumber.from('0')
		let sumVolume = BigNumber.from('0')
		for (let i = BigNumber.from('0'); i.lt(interAxisX); i = i.add(step)) {
			const volume = await token.volume(s, s.add(step))
			sumVolume = sumVolume.add(volume)
			console.log('volume', volume.toString())
			console.log('sumVolume', sumVolume.toString(), sumVolume.div(BigNumber.from(1e18.toString())))
			s = s.add(step)
		}
		const totosupply = await token.volume(0, interAxisX)
		console.log('totosupply', totosupply.toString())
		console.log('max', interAxisX.toString())

	})

	it('mint', async () => {
		const signer = await signers[0].getAddress()
		await token.connect(signers[0]).mint()
		const balance = await token.balanceOf(signer)
		console.log('mint', balance.toString())
		await token.connect(signers[0]).mint()
		const balance1 = await token.balanceOf(signer)
		console.log('mint1', balance1.toString())
		console.log('balance', balance1.sub(balance).toString())
	})

})
