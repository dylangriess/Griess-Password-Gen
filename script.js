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
var symbolCharacters = [
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

// Add event listener
generateBtn.addEventListener("click", writePassword);

// Declare a function, generatePassword.
function generatePassword() {
  // Prompt user to declare the value of passwordLength.
  var passwordLength = prompt(
    "How many characters long?" + "\n" + "Please enter a number between 8-128."
  );

  // If passwordLength is outside of 8-128 character range, alert user and return to beginning of generatePassword() function.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters long.");
    generatePassword();
  }

  // Ask the user to declare the value of local boolean variables for the use of each type of character.
  var includeUpperCase = confirm("Do you want to include uppercase letters?");
  var includeLowerCase = confirm("Do you want to include lowercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSymbols = confirm("Do you want to include special characters?");
  // Recall function if user does not meet selection criteria.
  if (
    includeUpperCase === false &&
    includeLowerCase === false &&
    includeNumbers === false &&
    includeSymbols === false
  ) {
    alert("You must select at least one character type - Please try again.");
    generatePassword();
  }
  // Sample array to pull from above, sample bank to store selected, and final array
  var sampleArray = [];
  var arrayBank = [];
  var finalPassword = [];

  // Uppercase letters added
  if (includeUpperCase == true) {
    sampleArray.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    console.log(sampleArray);
    arrayBank = arrayBank.concat(upperCase);
  }

  // Lowercase letters added
  if (includeLowerCase == true) {
    sampleArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    console.log(sampleArray);
    arrayBank = arrayBank.concat(lowerCase);
  }

  // Numbers added
  if (includeNumbers == true) {
    sampleArray.push(number[Math.floor(Math.random() * number.length)]);
    console.log(sampleArray);
    arrayBank = arrayBank.concat(number);
  }

  // Symbols added
  if (includeSymbols == true) {
    sampleArray.push(
      symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)]
    );
    console.log(sampleArray);
    arrayBank = arrayBank.concat(symbolCharacters);
  }

  // Push characters from arrayBank into final password
  for (i = 0; i < passwordLength; i++) {
    finalPassword.push(arrayBank[Math.floor(Math.random() * arrayBank.length)]);
    console.log("Your password is: " + finalPassword.join(""));
  }
  // Turns password into string, removes commas to final password return
  return finalPassword.join("");
}
