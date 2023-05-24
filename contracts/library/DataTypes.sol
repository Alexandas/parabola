// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.8.0;

library DataTypes {
	error InvalidTE(uint256 T, uint256 E);

	error InvalidIntersectionAxisX(uint256 interAxisX);

	error InvalidIntersectionAxisY(uint256 interAxisX);

	error InvalidAxisX(uint256 x, uint256 interAxisX);

	error InvalidAxisY(uint256 x);
}
