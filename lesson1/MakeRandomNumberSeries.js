var fs = require("fs");

var file = "RandomNumSeries.dat";

var numInput = new Number(process.argv[2]);

var outputString = [];

for (var i = 0; i < numInput; i++){
	var numOutput = parseInt(new Number(Math.random() * numInput).toFixed(0));
	outputString.push(numOutput);
}

fs.writeFile(file,JSON.stringify(outputString),function(err){
	if (!err){
		console.log("OK");
	}
});