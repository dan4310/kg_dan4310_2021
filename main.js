const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var inputArgs = process.argv.slice(2);

console.log(inputArgs);
rl.close();