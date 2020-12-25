

function passwordsFromCorporate() {
	var fs = require("fs");
	var text = fs.readFileSync("./day-2.txt",
		"utf-8");
	var textByLine = text.split("\n")
	textByLine.pop();
	var truthey = 0;
	var falsey = 0;

	for (let line of textByLine) {
		let innerArray = line.split(" ")
		let lowHigh = innerArray[0].split('-')
		innerArray.splice(0,1,lowHigh)
		innerArray[1] = innerArray[1][0]
	let [[min,max],letter,string] = innerArray
		min = Number(min)
		max = Number(max)
		let re1 = new RegExp(letter, "gi")
	let test = (string.match(re1) || []).length;

		if ( test >= min && test<= max ) {
			truthey++
		} else {
			falsey++
		}

		/*console.log(letter + " appears in "+ string
			+ " b/w " + min + "|" + max
			+ " times = " + test)
	*/
	}

	console.log("T  F   Total")
	console.log(truthey, falsey, textByLine.length)
	console.log(textByLine[0])
	console.log(textByLine[198])
}

function passwordsByIndex() {
	var fs = require("fs");
	var text = fs.readFileSync("./day-2.txt",
		"utf-8");
	var textByLine = text.split("\n")
	textByLine.pop();
	var truthey = 0;
	var falsey = 0;

	for (let line of textByLine) {
		let innerArray = line.split(" ")
		let lowHigh = innerArray[0].split('-')
		innerArray.splice(0,1,lowHigh)
		innerArray[1] = innerArray[1][0]
	let [[min,max],letter,string] = innerArray
		min = Number(min)
		max = Number(max)
		let a = string[min-1] === letter
		let b = string[max-1] === letter

		console.log(a, b);

		if ( (a || b) && !(a && b) ) {
			truthey++
		} else {
			falsey++
		}

		/*console.log(letter + " appears in "+ string
			+ " b/w " + min + "|" + max
			+ " times = " + test)
	*/
	}

	console.log("T  F   Total")
	console.log(truthey, falsey, textByLine.length)
}

passwordsByIndex();
