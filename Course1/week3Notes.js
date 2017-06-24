/*FOR LOOPS*/

for (var index = 0; index < 10; index++){
  //code
}

somearray = []
for (var index in somearray) {
  //code
  alert(somearray[index])
}

var onePerson = {initials: "JL", age: 18, job: "Student"}
for (var property in onePerson) {
  alert(propery + "=" + oneperson[property])
}

for (var continent of continents){
  //continent gives actual value
}

for (var rabbits= 2, generation = 1; generation <=12; generation++, rabbits*=2){
  //code
}

while(true) {
  if (boolean){
    //code
  }else if(boolean){
    continue // goes to next iteration of loop, w/o executing rest
  }
  else{
    break;
  }
}

/**ArraYS*/
var pets = ["Dogs", "Cats", "Rabbits", "Hamster"]
pets.sort() // sorts pets
pets.reverse()// reverses pets
pets.indexOf("Rabbit") // 2, -1 if not found
pets.lastIndexOf("Rabbit ") // gives position of last rabbit, -1 else
var result = pets.slice(1) //extracts part of an array by start position, nondestructive

var pets = ["Dogs", "Cats", "Hamster"]
var result = pets.splice(2,0, "Rabbits") // adds an element to pets, using array.splice(position, 0, element, result = [], pets is ["Dog", "Cat", "Rabbit", Hamster]
var pets = ["Dogs", "Cats", "Hamster"]
var result = pets.splice(1,1, "rabbit", "fish")//replacing an item, now pets is dog, rabbit, fish, hamster, and result is cat

rabbit hamster dog cat
