const fs = require('fs');

const contains = (array, data) => {
	let result = false;
	for (let i = 0; i < array.length; i++) {
		if (array[i].x === data.x && array[i].y === data.y) {
			result = true;
		}
	}
	return result;
}

fs.readFile("./input.txt", (err, data) => {

	let houses = 1;
	let input = data.toString();
	let array = [];
	let point = { x: 0, y: 0};
	array.push(point);
	for (let i = 0; i < input.length; i++) {
		if (input[i] === '<') {
			let new_point = { x: point.x - 1, y: point.y};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		} else if (input[i] === '>') {
			let new_point = { x: point.x + 1, y: point.y};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		} else if (input[i] === '^') {
			let new_point = { x: point.x, y: point.y + 1};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		} else if (input[i] === 'v') {
			let new_point = { x: point.x, y: point.y - 1};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		}
	}
	console.log(houses);

})

fs.readFile("./input.txt", (err, data) => {

	let houses = 1;
	let input = data.toString();
	let array = [];
	let point = { x: 0, y: 0};
	let point2 = { x: 0, y: 0};
	array.push(point);
	for (let i = 0; i < input.length; i++) {
		if (i % 2 == 0) {
			if (input[i] === '<') {
			let new_point = { x: point.x - 1, y: point.y};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		} else if (input[i] === '>') {
			let new_point = { x: point.x + 1, y: point.y};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		} else if (input[i] === '^') {
			let new_point = { x: point.x, y: point.y + 1};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		} else if (input[i] === 'v') {
			let new_point = { x: point.x, y: point.y - 1};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point = new_point;
		}
	} else {
		if (input[i] === '<') {
			let new_point = { x: point2.x - 1, y: point2.y};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point2 = new_point;
		} else if (input[i] === '>') {
			let new_point = { x: point2.x + 1, y: point2.y};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point2 = new_point;
		} else if (input[i] === '^') {
			let new_point = { x: point2.x, y: point2.y + 1};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point2 = new_point;
		} else if (input[i] === 'v') {
			let new_point = { x: point2.x, y: point2.y - 1};
			if (!contains(array, new_point)) {
				array.push(new_point);
				houses++;
			}
			point2 = new_point;
		}
		}
	}
	console.log(houses);
	

})