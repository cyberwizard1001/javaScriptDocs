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


//Array of objects 
var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Nirmal K",
      "title": "Song",
      "release_year": 2020,
      "formats":[
        "casette",
        "digital"
      ],
      "gold": true
    }
  ];


  //Accessing array elements inside objects 
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage["car"].inside["glove box"];


  //Using objects as arrays and identifying array elements 
  var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  var secondTree = "";
  
  secondTree = myPlants[1].list[1];


  
