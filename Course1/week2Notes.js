var number = 234.342;
var string = "this is a string";
var thisIsABoolean = true;

var storage = 341;
storage = "This is valid";

'234.342 is type' + typeof number

//shortcuts
count++
count += 1
hello += "!"
marks -= 20
pigs *= 4

parseInt() //converts to integer
parseFloat() //converts to floating type integer
String() //converts the value of an object to a String


/*Events
  ex: clicking on a something, moving the mouse, pressing a key on the keyboard*/
/* <body onload="dogs = do_something(10)">*/

function do_something(cats) {
  alert('Hello!');
  alert('We start soon...');
  prompt('Excited?!');
  return cats;
}

alert("") //returns nothing
name = prompt("my name") // returns a string
  console.log("The value entered was : " + name)
confirm("ok?") // returns boolean

switch(variable_name) {
  case "option_1": do_something();
                    break;
  case "option_n": do_something_n();
                break;
  default: do_something_default();
}

var text = "The cat's hat was wet";
result = text.indexof("at");

do {
  //this will always happen
}while (condition){
  //then this happens
}

var pets = ["dog", "cat", "rabbit"];
array.join(" and ") // converts an an array to a string using a separator, default is a comma
pets[2] // rabbit
pets.length // 3
pets.push("hamster") // pushes hamster to back of array
pets.unshift("snake") // pushes snake to front of array
pets.pop() // returns hamster
pets.shift() //returns snake, first element

var humans = new Array(10);
result = pets.concat(humans)

Math.random(); //generates number between [0,1)
var random = Math.random()*50;
Math.floor(random) //throws away the decimal place
