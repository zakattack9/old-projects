/* Zak Sakata | November 16, 2016 | Javascript Test Review */
/*   ctrl + shift + /   */

//Variables
var knight = "Gwain";
var maiden = "Guinevere";
var monster = "Griffin";
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
  wizard: "Merlin",
  weapon: weaponChest[2], 
  power: 16
};

//Hail the King
function swordInTheStone(worthy){
  if(worthy == "Arthur"){
    console.log("We have found the King worthy.");
  }
  else{
    console.log("We must keep searching, for " + worthy + " is unworthy.");
  }
}
swordInTheStone(knight);

//Hail the King and Queen
function trueLove(king, queen){
  if(queen == "Guinevere" && king == "Arthur"){
    console.log("On this day, our " + king + " and " + queen + " shall rule happily ever after.");
  }
  else{
    console.log("We must keep searching, for true love must reign over Camelot.");
  }
}
trueLove(knight, maiden);

//Merlin and Monster
function epicBattle(wizard, enemy, power){
  if(power <= 15){
    console.log("Our " + wizard + " has fallen.");
  }
  else if(power >= 16 && power <= 40){
    console.log(wizard + " has almost slain the " + enemy + ".");
  }
  else{
    console.log("Our " + wizard + " has slain the enemy!");
  }
}
epicBattle(hero.wizard, monster, hero.power);

//Merlin's Weapon
function weaponOfMerlin(combat, wizard){
  if(combat == "Sorcerer's Stone"){
    console.log(wizard + " shall slay the " + monster + " with the " + combat + ".");
  }
  else{
    combat = weaponChest[1];
    console.log(wizard + " is ready for war with the " + combat + " in hand.");
  }
}
weaponOfMerlin(hero.weapon, hero.wizard);