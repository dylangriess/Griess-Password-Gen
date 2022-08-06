// // Assignment code here

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   // Need to define function generatePassword()
//   var password = generatePassword();

//   // These lines of code are responsible for updating password in provided text box
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "=",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "'",
  "{",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  // Variable password will equal the result of generatePassword() function
  var password = generatePassword();
  // Variable passwordText will equal the HTML element with "id = password"
  var passwordText = document.querySelector("#password");
  // The value of var passwordText should equal var password
  passwordText.value = password;
}
