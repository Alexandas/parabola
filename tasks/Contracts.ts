import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { Parabola__factory } from '../types'

export const Parabola = async (env: HardhatRuntimeEnvironment) => {
	const deployment = await env.deployments.get('Parabola')
	const signers = await env.ethers.getSigners()
	return Parabola__factory.connect(deployment.address, signers[0])
}