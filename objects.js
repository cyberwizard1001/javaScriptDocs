//Sample object

var ourDog = {
    "name": "Camper",            //property:value
    "legs": 4,
    "tails": 1,
    "friends":["everything"]
};

//Accessing a property in an object

var testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
};

var hatValue = testObj.hat;          //.valuename     
var shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation

var shoesValue = testObj["shoes"]; 

var thing = "hat";
var thingValue = testObj[thing];     //using variable in place of property name


//Adding a new property
ourDog.bark = "Woof woof";


//Deleting a property
delete ourDog.bark;

//Using objects to replace switch statements
var lookup = {
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six"
};

result = lookup[val]         //where val is passed and usually would be the switch variable


