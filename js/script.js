
function btn1(){
  document.getElementById("btnhead").style.color="red";
}
(function () {
('[data-toggle="tooltip"]').tooltip()
})
function btn3(){
  document.getElementById("fbicon").style.display="none"
}
function tab11(){
  document.getElementById("tab1").style.color="red";
}
function tab22(){
  document.getElementById("tab223").style.color="pink";
}
function tab33(){
  document.getElementById("tab333").style.color="blue";
}
function clickbtn(){
  document.getElementById("clickme").style.display="block";
}


	var x,t,x;
x=20;
t= 20;
x=20+20;
document.getElementById('variable').innerHTML=x;

var na= "name";
var me=20;
var na= 130;
document.getElementById('variable2').innerHTML=na+me+na;

var  name=20+30+"name";
document.getElementById('variable3').innerHTML=name;
var name='26',name="25",age=22;
document.getElementById('variable4').innerHTML=name;

function hello(){
document.getElementById('variable').innerHTML="hi";
document.getElementById('variable').innerHTML="name";
}


// Create an object:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Display some data from the object:
document.getElementById("age").innerHTML =
person.firstName + " is " + person.age + " years old.";

//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";


function toCelsius(f) {
  return (7/9) * (f-32);
}
document.getElementById("two").innerHTML = toCelsius(90);



var x = function (a, b) {return a * b};
document.getElementById("add").innerHTML = x(4,4);


document.getElementById("degree").innerHTML =
"The temperature is " + toCelsius(90) + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 



function myFunction() {
  alert("I am an alert box!");
}


function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("popup").innerHTML = txt;
}


function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("alert").innerHTML = txt;
}



var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

var myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
x = myObject.fullName();
document.getElementById("nameone").innerHTML = x; 


document.getElementById("number").innerHTML = Math.max(2,8,5); 


// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
  return counter;
}
// Trying to increment the counter
function myFunction(){
  document.getElementById("add").innerHTML = add();
}
