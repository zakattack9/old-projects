//Invert Values

//Given a set of numbers return the additive inverse of each.
//Each positive number becomes negative, negative becomes positive.
//Watch for zero edge case.
//Build a function for this, invoke and pass test parameters of [0, 1, 3, -2]
//Output should be [0, -1, -3, 2]

/*//ES5 Method
var numbers = [0, 1, 3, -2];
function inverse(arr){
  var output = [];
  for (var i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      output.push(arr[i] * -1);
    }
    else{
      output.push(0);
    }
  }
  return output;
}
console.log(inverse(numbers));

//ES6 Method
function inverse(arr){
  return arr.map( x => === 0 ? x : -x);
  //arr.map is a functional array method; x takes the value of i; .map will return a new array; does not modify original array
  // "=>" is an arrow function (implicit return)
  // ":" is the else statement
  // "?" replaces (turnary statement)
}
console.log(inverse(numbers));*/


//ES6 DIFFERENCES//

//############################
//Variables (let, const)
//ES5
var arr = [5]; //ES5
//No scope (can be global or local; hoisting)

//ES6
let arr = [5]; //ES6
//Restricted scope (can't be changed OUTSIDE of code block; protects value)

const PI = 3.1458;
//Variable can not be changed; const var names should be all uppercase

//############################
//Arrow Functions (=>)
//ES5
var square = function(num){
  return num * num;
}

function square(num){
  return num * num;
}
//ES6 With Arrow Function
//ES6's arrow functions are global functions
let square = (num) => {
  return num * num;
}
let square = num => num * num; //shorthand of function above
//does not need parenthesis for parameter if only one parameter exists 
let square = num => num * num;
//arrow functions can be rewritten without "return"
let multiply = (a, b) => a * b;
//needs parenthesis for parameters because more than one exists

//Rewriting ES5 functions into ES6 functions example:
function ageCalc(born, currYear){
  var age = currYear - born;
  return age;
}
//ES5 function (above) rewritten in ES6 function (below)
let ageCalc = (born, currYear) => return currYear - born;

//############################
//Functional Array Methods (.forEach, .map)
let arr = [1, 2, 3, 4];

//.forEach() runs a function on each element of the array
arr.forEach((entry) => {
  console.log(entry);
})

//.map() runs a function on each element of an array, but returns the values in a new array
arr.map((entry) => {
  console.log(entry);
})

//OOP (Object Oriented Programming)
// slides.com/theremix/es6-oop#/
