"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParabolaSocial__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "applicationIds",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "subordinates",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "superiors",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104668061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063715018a6146100675780638da5cb5b146100715780639d874afd14610094578063b47c32a1146100bd578063f148b875146100e6578063f2fde38b1461011a575b600080fd5b61006f61012d565b005b6000546001600160a01b03165b60405161008b9190610220565b60405180910390f35b61007e6100a236600461024d565b6003602052600090815260409020546001600160a01b031681565b61007e6100cb36600461024d565b6002602052600090815260409020546001600160a01b031681565b61007e6100f4366004610371565b80516020818301810180516001825292820191909301209152546001600160a01b031681565b61006f61012836600461024d565b610141565b610135610184565b61013f60006101ae565b565b610149610184565b6001600160a01b0381166101785760405162461bcd60e51b815260040161016f906103ac565b60405180910390fd5b610181816101ae565b50565b6000546001600160a01b0316331461013f5760405162461bcd60e51b815260040161016f906103f6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006001600160a01b0382165b92915050565b61021a816101fe565b82525050565b6020810161020b8284610211565b610237816101fe565b811461018157600080fd5b803561020b8161022e565b60006020828403121561026257610262600080fd5b600061026e8484610242565b949350505050565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff821117156102b2576102b2610276565b6040525050565b60006102c460405190565b90506102d0828261028c565b919050565b600067ffffffffffffffff8211156102ef576102ef610276565b601f19601f83011660200192915050565b82818337506000910152565b600061031f61031a846102d5565b6102b9565b90508281526020810184848401111561033a5761033a600080fd5b610345848285610300565b509392505050565b600082601f83011261036157610361600080fd5b813561026e84826020860161030c565b60006020828403121561038657610386600080fd5b813567ffffffffffffffff8111156103a0576103a0600080fd5b61026e8482850161034d565b6020808252810161020b81602681527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160208201526564647265737360d01b604082015260600190565b60208082528181019081527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408301526060820161020b56fea264697066735822122087847681be453dae0ea2af14bf455d5324eff954de9ac7b8eb161a94f84807bc64736f6c63430008090033";
var ParabolaSocial__factory = /** @class */ (function (_super) {
    __extends(ParabolaSocial__factory, _super);
    function ParabolaSocial__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    ParabolaSocial__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ParabolaSocial__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ParabolaSocial__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ParabolaSocial__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ParabolaSocial__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ParabolaSocial__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ParabolaSocial__factory.bytecode = _bytecode;
    ParabolaSocial__factory.abi = _abi;
    return ParabolaSocial__factory;
}(ethers_1.ContractFactory));
exports.ParabolaSocial__factory = ParabolaSocial__factory;