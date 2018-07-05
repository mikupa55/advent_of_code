const fs = require('fs');

const min_of_three = (a, b, c) => {
	return Math.min(a, b, c);
}


fs.readFile("./input.txt", (err, data) => {

	let sum = 0;
	let input = data.toString();
	let lines = input.split("\n");  // Array of dimensions like '4x15x7'

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i].split('x');  // single item [4, 15, 7]
		let convert_to_int = [Number(line[0]), Number(line[1]), Number(line[2])];
		let areas = 
		[convert_to_int[0] * convert_to_int[1], 
		convert_to_int[1] * convert_to_int[2], 
		convert_to_int[0] * convert_to_int[2]];
		let min = min_of_three(areas[0], areas[1], areas[2]);

		sum += (2 * Number(areas[0]) + 2 * Number(areas[1]) + 2 * Number(areas[2]));
		sum += min;


	}

	console.log(sum);
	
	
});

fs.readFile("./input.txt", (err, data) => {

	let sum = 0;
	let input = data.toString();
	let lines = input.split("\n");  // Array of dimensions like '4x15x7'

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i].split('x');  // single item [4, 15, 7]
		let convert_to_int = [Number(line[0]), Number(line[1]), Number(line[2])];  // Cast string to int

		// Lol what a language, you have to sort like this?????
		convert_to_int.sort((a, b) => { 
			return a - b;
		});

		sum += convert_to_int[0] * convert_to_int[1] * convert_to_int[2];
		sum += 2 * convert_to_int[0];
		sum += 2 * convert_to_int[1];

		}
		console.log(sum);
	
});
