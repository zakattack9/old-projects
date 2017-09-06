/*

Zak Sakata
Objects and Arrays Quiz
December 7, 2016

*/

var myArray = ["Please don't", " fail me", 10, true];
  console.log(myArray[2]);

function aFunction(x){
  if(x == true){
    console.log(myArray[0] + myArray[1] + ", give me a " + myArray[2] + " out of " + myArray[2] + ".");
  }
  else{
    console.log("You my friend, shall not pass!")
  }
}
aFunction(myArray[3]);

var batman = {
  man:true,
  utilityBelt:["batarang", "smokebomb", "C4"],
  vehicle:"batmobile",
  sidekick:"Robin"
};

function anotherFunction(y){
  if(y == true){
    console.log("Grab my " + batman.utilityBelt[0] + " " + batman.sidekick + ", we will be taking the " + batman.vehicle + " soon!");
  }
  else{
    console.log("No, I'm the bat");
  }
}
anotherFunction(batman.man);
