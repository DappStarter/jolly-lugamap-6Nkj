require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strategy deny outside color gesture light army general'; 
let testAccounts = [
"0xe3bcadec734bf63a320fa7ff079d7cada9f619618275cade37774973cc47c895",
"0x448501cb748dd9bf65fbf9d5570921a88fc517be809dd9d60f99beca4a69b513",
"0x4e00da643397bc6286716647fdb6d4e44bd19d5721c80746f90865e28383ce1b",
"0x0916d2099e814669ef67ba2e76474895e83e58185e5f1e644db70ce17ba04c30",
"0x4a7d75ebe603cd77d71d9237dc7b688664d5a55e123b4a449dcdcbc818775e36",
"0x14dcce7528485c1c6eef2552fe7d2e2ef8a447df8baf4d7042f6a225611ee794",
"0x904b97894130130cda68db9a3fec23f9d56cb153adc70300ff48c08e611b883b",
"0xad0e313bea1b33a8fc159205cd2a5557c9baf981244353211f411bc75ef248f9",
"0x5a51303629cce105b04ca26136c2ed81b339e55940677f6d6bd5792e43619b1d",
"0x02b2b1b036ff172e389cb57f7dbdd8eabb5d4814caa5c4e46760078387e1a2de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

