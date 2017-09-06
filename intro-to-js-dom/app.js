console.log("JS");

//Accesing HTML elements using DOM

//console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);

//console.log(document.getElementsByTagName("div"));
var tagName = document.getElementsByTagName("div");
console.log(tagName);

//console.log(document.getElementsByClassName("use-class-method"));
var className = document.getElementsByClassName("use-class-method");
console.log(className);

//Changing HTML elements using DOM
var changeId = idElement.innerHTML = "Id has been changed";
console.log(changeId);

var changeSecondClass = className[1].innerHTML = "I've been changed by class name and array location";
console.log(changeSecondClass);