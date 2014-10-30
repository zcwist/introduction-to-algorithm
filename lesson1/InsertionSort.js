var fs = require("fs");

var file = "RandomNumSeries.dat";

var fileRead = fs.readFileSync(file,{encoding:'utf8'});

var input = JSON.parse(fileRead);

for (var i = 1; i < input.length; i ++){
	var key = input[i];
	j = i - 1;
	while (j >= 0 && input[j] > key){
		input[j + 1] = input[j]; 
		j --
	}
	input[j+1] = key;

}
console.log(input);