console.log("JavaScript is Wokring")

function red(){
  var z = document.getElementById("box");
  z.id = "redbox";
}
function green(){
  var y = document.getElementById("redbox");
  y.id = "box";
}

function change(){
  var x = document.getElementsByClassName("box2");
  x.id = "redbox";
  /*if(x.style.backgroundColor = blue && x.style.border = 5px purple dashed){
    x.style.backgroundColor = purple && x.style.border = 5px blue solid;
  }
  else if(x.style.backgroundColor = purple && x.style.border = 5px blue solid){
    x.style.backgroundColor = blue && x.style.border = 5px purple dashed;
  }*/

  //the code above doesn't work, when it is running, it causes the red and green function to stop working also
}

