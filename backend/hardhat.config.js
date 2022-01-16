// https://eth-ropsten.alchemyapi.io/v2/Zi5chgeMD6reEtLFICA7TrBOqFfmGuVN

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/Zi5chgeMD6reEtLFICA7TrBOqFfmGuVN',
			accounts: [
				'b03fa72650b7ef9e1de8e990bb5fdbf2b849492fe3993c23df7901d4c14ebc92',
			],
		},
	},
};
