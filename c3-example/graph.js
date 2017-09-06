var chart = c3.generate({
  bindto: "#chart",
  data: {
  	columns: [
  	["data1", 300, 100, 80],
  	["data2", 240, 60 , 30],
  	["data3", 100, 20, 400]

  	],
  	types: {
  		data1: "pie",
  		data2: "pie",
  		data3: "pie"
  	}
  }
});