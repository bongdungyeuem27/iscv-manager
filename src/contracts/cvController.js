import Web3 from 'web3';

export const ABI = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256'
            }
        ],
        name: 'addA',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'AddA',
        type: 'event'
    },
    {
        inputs: [],
        name: 'a',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getA',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
export const ADDRESS = '0xac526eBEF2eaADc3F6E3862f5f37c75b99BaB62f';

export async function getContract(provider) {
    const web3 = new Web3(provider);
    return new web3.eth.Contract(ABI, ADDRESS);
}
