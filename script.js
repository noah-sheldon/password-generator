// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr, length) {
  return arr
    .sort(() => Math.random() - Math.random())
    .slice(0, length)
    .join("");
}

// Function to generate password with user input
function generatePassword(length, lowerCase, upperCase, numeric, special) {
  let password = "";
  let arr = [];
  if (lowerCase) {
    arr = arr.concat(lowerCasedCharacters);
  }
  if (upperCase) {
    arr = arr.concat(upperCasedCharacters);
  }
  if (numeric) {
    arr = arr.concat(numericCharacters);
  }
  if (special) {
    arr = arr.concat(specialCharacters);
  }
  password = getRandom(arr, length);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let length = document.getElementById("length").value;
  let lowerCase = document.getElementById("lowerCase").checked;
  let upperCase = document.getElementById("upperCase").checked;
  let numeric = document.getElementById("numeric").checked;
  let special = document.getElementById("special").checked;

  if (
    lowerCase === false &&
    upperCase === false &&
    numeric === false &&
    special === false
  ) {
    alert(
      "Select atleast 1 condition, lowercase, uppercase, numeric or special"
    );
  } else if (length >= 8 && length <= 128) {
    var password = generatePassword(
      length,
      lowerCase,
      upperCase,
      numeric,
      special
    );
    var passwordText = document.querySelector("#password");
  } else {
    alert(
      "Password length should be at least 8 characters but no more than 128"
    );
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
