// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/math/Math.sol';
import '@openzeppelin/contracts/utils/structs/EnumerableMap.sol';

import './library/DataTypes.sol';

/// @dev Parabola Token contract
contract Parabola is ERC20Burnable, Ownable {
	using Math for uint256;

	uint128 public step = 1e12;

	uint128 public fee = 56e13; // 1 U

	uint256 public interAxisX;

	/// @dev the true a = -1/ora;
	uint256 public ora;

	uint128 public b;

	uint256 public c;

	uint256 public s;

	event Mint(address payer, address to, uint256 value, uint256 s);

	modifier validateAxis() {
		unchecked {
			if (s >= interAxisX) {
				revert DataTypes.InvalidAxisX(s, interAxisX);
			}
			if (c + (b * s) < ((s * s) / ora)) {
				revert DataTypes.InvalidAxisY(s);
			}
		}
		_;
		unchecked {
			if (s > interAxisX) {
				revert DataTypes.InvalidAxisX(s, interAxisX);
			}
			if (c + (b * s) < ((s * s) / ora)) {
				revert DataTypes.InvalidAxisY(s);
			}
		}
	}

	constructor(uint256 T, uint256 E) ERC20('Parabola Coin', 'Para') {
		unchecked {
			if (3 * T > 2 * E * E * E) {
				revert DataTypes.InvalidTE(T, E);
			}
			if (3 * T < 2 * E) {
				revert DataTypes.InvalidTE(T, E);
			}
			ora = (2 * E * E * E) / (3 * T);
			b = 0;
			c = (3 * T) / (2 * E);
			s = 0;
		}
		interAxisX = uint256(ora * c).sqrt();
		unchecked {
			if (interAxisX < step) {
				revert DataTypes.InvalidIntersectionAxisX(interAxisX);
			}
			if (c + (b * interAxisX) < ((interAxisX * interAxisX) / ora)) {
				revert DataTypes.InvalidIntersectionAxisY(interAxisX);
			}
		}
	}

	function nextStepVolume() public view returns (uint256) {
		return volume(s, s + step);
	}

	function volume(uint256 s, uint256 e) public view returns (uint256) {
		unchecked {
			return (3 * ora * c * (e - s) + (s * s * s) - (e * e * e)) / ora / 3;
		}
	}

	function mint(address to) external payable validateAxis {
		uint256 value = msg.value;
		address payable from = payable(msg.sender);
		if (value < fee) {
			revert('Parabola: insufficient fee');
		} else if (value > fee) {
			from.transfer(value - fee);
		}
		uint256 volume = nextStepVolume();
		_mint(to, volume);
		s += step;
		emit Mint(from, to, volume, s);
	}
}
