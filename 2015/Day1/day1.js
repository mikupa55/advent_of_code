const fs = require('fs');


fs.readFile("./input.txt", (err, data) => {

	let floor = 0;
	let input = data.toString();
	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(') {   // If left paren floor + 1
			floor++;
		} else {					// otherwise floor - 1
			floor--;
		}
		if (floor === -1) {
			console.log(i);
			break;
		}
	}
	console.log(floor);
});