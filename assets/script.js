// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


// password user choice length is >= 8 <= 128 characters
var characterLength = [];
// possible user choices: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+`~[]{}|;:',<>./?
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "]", "{", "}", "|", ";", ":", "'", ",", "<", ">", ".", "/", "?"]
var userChoice = [];

// var index = Math.floor(Math.random() * options.length);
// something similar to this example from activites probably needed in a function somewhere
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When button clicked, console says generatePassword() is not defined so we need to define this function
// Function would be defined by prompt criteria chosen
function generatePassword() {

}
// getPrompts() returning undefined in console after selecting a number within range instead of going through rest of prompts?
function getPrompts() {
  characterLength = prompt("How long do you want your password to be? (8-128 characters)")
  
  if (characterLength < 8 || characterLength > 128 ) {
    alert("Character length needs to be a number, 8 - 128.");
    return false;
  }

  if (confirm("Do you want your password to include lowercase letters?")) {
    userChoice = userChoice.concat(lowerCaseOptions);
    //if not then do not concat arrays / something needs to happen?
  }

  if (confirm("Do you want your password to include uppercase letters?")) {
    userChoice = userChoice.concat(upperCaseOptions);
    //if not then do not concat arrays / something needs to happen?
  }

  if (confirm("Do you want your password to include numbers?")) {
    userChoice = userChoice.concat(numberOptions);
    //if not then do not concat arrays / something needs to happen?
  }

  if (confirm("Do you want your password to include special characters?")) {
    userChoice = userChoice.concat(speacialCharOptions);
    //if not then do not concat arrays / something needs to happen?
  }
  return true;
}