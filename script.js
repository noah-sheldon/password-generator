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
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(length, lowerCase, upperCase, numeric, special) {
  let password = "";
  let l = lowerCase;
  let u = upperCase;
  let n = numeric;
  let s = special;
  // Loop through the length of the desired password and add randomly selected character types until reaching the total length.
  // Generate the length of the password based on user input
  for (i = 0; i < length; i++) {
    password +=
      l === true && u === false && n === false && s === false
        ? getRandom(lowerCasedCharacters)
        : l === false && u === true && n === false && s === false
        ? getRandom(upperCasedCharacters)
        : l === false && u === false && n === true && s === false
        ? getRandom(numericCharacters)
        : l === false && u === false && n === false && s === true
        ? getRandom(specialCharacters)
        : l === true && u === true && n === false && s === false
        ? getRandom(lowerCasedCharacters.concat(upperCasedCharacters))
        : l === true && u === true && n === true && s === false
        ? getRandom(lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters))
        : l === true && u === true && n === true && s === true
        ? getRandom(lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters))
        : l === false && u === true && n === true && s === false
        ? getRandom(numericCharacters.concat(upperCasedCharacters))
        : l === false && u === true && n === true && s === true
        ? getRandom(numericCharacters.concat(upperCasedCharacters, specialCharacters))
        : l === false && u === false && n === true && s === true
        ? getRandom(numericCharacters.concat(specialCharacters))
        : l === true && u === true && n === false && s === true
        ? getRandom(upperCasedCharacters.concat(specialCharacters,lowerCasedCharacters))
        : l === true && u === true && n === false && s === true
        ? getRandom(upperCasedCharacters.concat(specialCharacters,lowerCasedCharacters))
        : l === true && u === false && n === true && s === true
        ? getRandom(numericCharacters.concat(specialCharacters,lowerCasedCharacters))
        : l === true && u === false && n === true && s === false
        ? getRandom(numericCharacters.concat(lowerCasedCharacters))
        : l === true && u === false && n === false && s === true
        ? getRandom(specialCharacters.concat(lowerCasedCharacters))
        : l === false && u === true && n === false && s === true
        ? getRandom(upperCasedCharacters.concat(specialCharacters))
        : ""
  }
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
  // console.log(length);
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(numeric);
  // console.log(special);

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
