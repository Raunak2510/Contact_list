// Arrays 
const myArray=[];
// add element to an array 

myArray[0]="Rauank";
myArray[1]=1001;
myArray[2]=false;

// refer to an array 
console.log(myArray);

// length property 
console.log(myArray.length);

// last element of array 
console.log(myArray[myArray.length-1]);
// add an array 
 myArray.push("bhardwaj");
 console.log(myArray);

 // remove element 
 myArray.pop();
 // add element to the first position 
 myArray.unshift(42);
 // remove first item fro array 
 myArray.shift();

 // delete doest remove the element it just define undefined value at that position 
 delete myArray[1];

 // remove element from array by range 
 myArray.splice(1, 1)// it remove the value from staring index to ending index
 // reverse array
 myArray.reverse();
 // join an element of array to create string 
 const newString = myArray.join();

 // combine two array and traet like a 2d 
 const equipShelfA=["baseball", "football", "volleyball"];
 const equipShelfB=["basketball", "golf ball ", "tennis balls"];

 const clothshelfA=["tank", "t shirst", "jerseys"];
 const clothshelfB=["sweat tops ", "sweat pants", "hoodies"];
 const equipDept=[equipShelfA, equipShelfB];
 const clothesDept=[clothshelfA, clothshelfB];

 console.log(equipDept[0][1]);
 console.log(clothesDept[1][0]);


 // Object is just key value pair inside curly braces 
 const myObj={name:"Raunak"};
 const anotherObj ={
    alive: true, 
    answer:42,
    hoobies:["Eat", "Sleep", "Code"],
    beverage:{
        morning : "coffe",
        afternoon:"Ice Tea"
    }
 };
 //console.log(anotherObj.alive);

 const band ={
    voacls:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul ",
    drums:"Jhon Bonham"
 };
 console.log(Object.keys(band));
 console.log(Object.values(band));

 for(let job in band){
    console.log(band[job]);
 }
 // delete property from object 
 delete band.drums;
 // check property is present or not it return boolean value.
 console.log(band.hasOwnProperty("drums"));

 // accesing key and value

 for(let job in band){
    console.log(`On ${job}, its ${band[job]}`);
 }

 // destructuring objects 

 const {guitar: myVariable, bass:myBass}=band;
 console.log(myVariable);
 console.log(myBass);

 // destructring objects with same varaible with property
 const {voacls, guitar, bass, drums} =band;

 // Class 

 class Pizza {
   constructor(pizzaType, pizzaSize){
      this.type=pizzaType;
      this.size=pizzaSize;
      this.crust="original";

   } 
   // method
   bake(){
      console.log(
         `Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`
      );
   }
 }
// creating new object
 const myPizza = new Pizza("pepperoni", "small");
 myPizza.bake();

 const myObj1={
   name:"Dave",
   hobbies:["eat", "sleep", "code"],
   hello:function(){
      console.log("hello");
   }
 };
 // send json file 
 const sendJSON=JSON.stringify(myObj1);
 console.log(sendJSON);
 console.log(typeof sendJSON);

 // recive json file 
 const reciveJSON=JSON.parse(sendJSON);
 console.log(reciveJSON);

 // when we send data through json it loss the method 


 // Errors Handling 
"use strict"
 const makeError=()=>{
   try{  // inside catch we put our code 
    const name="rauank";
    name="bhardwaj"
    console.log(name);
   } catch(err) { // err is unique id through which it show type of error 
     console.error(err); // print what error is we use .error(err) instead of log because
   // we want the red colour.
   }
 }
  makeError();

 


 