// create readline interface
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// get compile arguments: the integers that will be converted to phonetics
var inputArgs = process.argv.slice(2);

// convert and print to phonetics
printPhonetic(inputArgs);

// close readline interface
rl.close();

/*
Function printPhonetic
parameter: array of numbers as strings
return: returns nothing but prints phonetic number representation 
*/
function printPhonetic(nums) {
	// all phonetics that are need to represent any number
	const phonetics = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

	// for each number in array
    nums.map((num) => {
    	var phoneticString = '';
		// iterate through each digit
    	for (i = 0; i < num.length; i++) {
			// get phonetic representation of digit and add to final string
    		phoneticString += phonetics[parseInt(num[i])]
    	}
		// print final string to stdout
    	rl.output.write(phoneticString);
		// if last number in array: print line break
		// else print comma to separate numbers
		inputArgs.indexOf(num) == inputArgs.length -1 ? rl.write("\n") : rl.write(",");
    })

}