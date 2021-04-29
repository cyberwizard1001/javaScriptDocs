//Global variables
//can be accessed by any fuction in file
//NOTE: VARIABLE WITHOUT VAR KEYWORD IS GLOBAL
var globalVar = "This variable is global";
globslVar2 = 5;

//Example
function firstFunction(){
    console.log("Hello World");
}

//Calling a function
firstFunction();

//Passing parameters 
function parameterFunction(a,b){
    console.log(a-b);
}

parameterFunction(10,5);


//NOTE: If local and global vars have same name, local var takes precedence

//Function with return statement
function numMinusSeven(a){
    return a - 7;
}

console.log(numMinusSeven(10));

//When a function doesn't return anything, the return value is considered "undefined".

