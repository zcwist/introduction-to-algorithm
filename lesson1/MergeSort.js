var fs = require("fs");

var file = "RandomNumSeries.dat";

var fileRead = fs.readFileSync(file,{encoding:'utf8'});

var input = JSON.parse(fileRead);
console.log(input);

console.log(divide(0,input.length-1));

function divide(startIndex, endIndex){
	if (startIndex < endIndex){
		var mid = parseInt((startIndex + endIndex) / 2);
		var sub1 = divide(startIndex, mid);
		var sub2 = divide(mid+1, endIndex);
		merge(startIndex, mid, endIndex);
	}
	return input;

}

function merge(startIndex, mid, endIndex){
	var leftLow = startIndex;
	var leftHigh = mid;
	var rightLow = mid + 1;
	var rightHigh = endIndex;
	
	var tmp = [];
	var tmpIndex = startIndex;

	while (leftLow <= leftHigh && rightLow <= rightHigh){
		if (input[leftLow] < input[rightLow]){
			tmp[tmpIndex++] = input[leftLow++]
		} else {
			tmp[tmpIndex++] = input[rightLow++];
		}
	}


	while (leftLow <= leftHigh){
		tmp[tmpIndex++] = input[leftLow++];

	}

	while (rightLow <= rightHigh){
		tmp[tmpIndex++] = input[rightLow++];
	}

	for (var i = startIndex; i <= endIndex; i++	){
		input[i] = tmp[i];
		console.log(input[i]);
	}
	console.log("---------------");
}