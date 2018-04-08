var HDWalletProvider = require("truffle-hdwallet-provider");

// Just for TEST. Hide for production.
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
	  // See <http://truffleframework.com/docs/advanced/configuration>
	  // to customize your Truffle configuration!
	  networks: {
	  	development: {
	  		host: "localhost",
	  		port: 7545,
	   		network_id: "*" // Match any network id
	},
	ropsten: {
		provider: function() {
			return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/Ax5n010X0yJC4cLit0ra")
		},
		network_id: 3, // Official ropsten network id
		gas: 4712388
	}   
}
};
