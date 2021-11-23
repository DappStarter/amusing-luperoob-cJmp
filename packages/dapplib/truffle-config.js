require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note range puppy grace nature swift shed'; 
let testAccounts = [
"0x704a5822911d6e2c676ee1b3415f1f32a23e0ebff2cfeb3a311017c389f6153a",
"0x3a856044c18c05f02784f743b43dc47ba46413268680e91d9230f820f6b3921b",
"0xeadd775f293ee70af379f3398d3b4e25de5468cd53428b696b8d0fb7043eb455",
"0xf1598e2de6d4e727118e40a49937afd54f697386bfb0f5881094e377f4ddb1ed",
"0x4eac0de7c9362694b2c4e3d2d380984a01dc2f14112627abfabf334c89cd8a09",
"0xf261c4eac0bc87026f767441e16099db29735fc96fb845455ab4a9103a975aee",
"0x1a11b0d96b22733b432002d0c173d2a2b18ecb9c2e6b0b047d6e060e440ce89e",
"0x4ac79249e6b113289d65099a448f26c1fb8e716f529af0dbbd546e189b03fbcf",
"0xc0d3ee3faedc4bd5ec32f4f41b2aa49751cd730a7231a351e29ec1d2684f3192",
"0x83316f9fe65927a6886f18ca6038970566e2dfe02af322a0a052b2e409924a74"
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

