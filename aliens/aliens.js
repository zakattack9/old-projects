/* attempts...

//first code, problem is if "green >= 5000" then the other console.log's aren't shown
function aliens(red, green, blue) {
  if ( green >= 5000 ){
  	console.log("MOTHER OF GOD, not the green ones");
  }else if (green + red >= 8000){
    console.log("DOOOOOM");
  }else if (red + blue <= 3000){
  	console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
  }
}
aliens(1000, 7000, 2000);

//second code, if any of the conditions are met, all console.log's will be shown
function aliens(red, green, blue) {
  if ( green >= 5000 ){
  	console.log("MOTHER OF GOD, not the green ones");
  }if (green + red >= 8000){
    console.log("DOOOOOM");
  }if (red + blue <= 3000){
  	console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
  }
}
aliens(10, 7000, 2990);

*/

//final code, do not invoke "aliens" function; otherwise it repeates
var red = 3000
var green = 5000
var blue = 2000
var totalAliens = 10000;
//variables above can be changed except for "totalAliens"

function alienChecker(){ //checks to make sure number of aliens input equal 10000, if it does not, alien function does not run
  if (red + green + blue == totalAliens){
    aliens()
  }
  else{
    console.log("The number of aliens do not equal 10000")
  }
}
alienChecker(); //must invoke alienChecker function

function aliens(){ //the function that actually runs the alien number inputs and gives the corresponding output
  if (green >= 5000 ){
  	console.log("MOTHER OF GOD, not the green ones");
  }
  if (green + red >= 8000){
    console.log("DOOOOOM");
  }
  if (red + blue <= 3000){
  	console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
  }
}