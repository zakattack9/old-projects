var output ; //empty variable to be determined by function

function calculator(x, y, z){
  if (x == "add" || x == "addition" || x  == "sum"){
   output = y + z;
  }
  else if (x == "subtract" || x == "subtraction" || x == "difference"){
   output = y - z;
  }
  else if (x == "multiply" || x == "multiplication" || x == "product"){
   output = y * z;
  }
  else if (x == "divide" || x == "division" || x == "quotient"){
   output = y / z;
  }
  else{
   console.log("you failed at math, go back to school");
  }
  console.log("Your number is " + output); //one console.log goes for all if and else if statements
}
calculator("subtract", 1, 2); //invoking function with parameters set inside