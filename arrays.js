//Single datatype array
var numArray = [1,2,3,4,5];
console.log(numArray);

//multiple datatypes in the same array
var myArray = ["Nirmal",1];
console.log(myArray);


//Nested array
var nestedArray = [["Nirmal","Sumithra","Sridhar","Tejaswi"],[4,3,2,1]];
console.log(nestedArray);

//Accessing array elements
var array = [1,2,3,4,5];
console.log(array[1]);

//Modifying array elements
array[1] = 0;

//Accessing nested arrays
var nestedElement = [0][0];
var nestedElement2 = [1][2];

console.log(nestedElement);
console.log(nestedElement2);

//Push function 
//adds element to next spot in array nestedArray
nestedArray.push(['a','b','c','e']);


//Pop function
//removes element from right end of array
nestedArray.pop();
console.log(nestedArray);

//Shift function
//removes first element of array
nestedArray.shift();
console.log(nestedArray);

//Unshift function
//adds element to the first position
nestedArray.unshift(["Nirmal","Sumithra","Sridhar","Tejaswi"]);
