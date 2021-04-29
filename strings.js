
var myStr = "This is a string variable";
console.log(myStr);

var escBlockString = "This is a double quote enclosed string with \"double quotes\"";
console.log(escBlockString);

var quoteString = 'This is a single quote enclosed string with a "double quote" in it.';
console.log(quoteString);

var backtickString = `This is a backtick enclosed string with 'single quote' and "double quote" in it`;
console.log(backtickString);

/*
Other escape sequences:

\'      single quote
\"      double quote 
\\      backslash
\n      newline 
\r      carriage return
\t      tab
\b      backspace
\f      form feed 
*/

//String concatenation 

var firstString = "I come first. ";
var secondString = "I come second";

var concatString = firstString+secondString;

var stringConcat = "this is the first half" + ",this is the second half"

console.log(concatString);
console.log(stringConcat);


var myName = "Nirmal Karthikeyan"
var myStr = "My name is ";

console.log(myStr+myName);


//Length of a string 
console.log(myName.length);

//Finding first character in a string 
console.log(myName[0]);

/*String immutability 

(can't change individual letters using number notation)

*/

//Word blanks 

