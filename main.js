const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var inputArgs = process.argv.slice(2);

printPhonetic(inputArgs);
rl.close();


function printPhonetic(string) {
	const phonetics = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

    string.map((num) => {
    	var phoneticString = '';
    	for (i = 0; i < num.length; i++) {
    		phoneticString += phonetics[parseInt(num[i])]
    	}
    	rl.output.write(phoneticString);
    })

}