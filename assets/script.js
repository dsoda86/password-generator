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
var characterLength = " ";
// possible user choices: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+`~[]{}|;:',<>./?
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "]", "{", "}", "|", ";", ":", "'", ",", "<", ">", ".", "/", "?"]
var userChoice = [];

// something similar to these examples from activites probably needed in a function somewhere
// for (var i = 0; i < zooAnimals.length; i++) { 
// console.log("I am going to zoo to see " + zooAnimals[i] + ".");
// }
// var index = Math.floor(Math.random() * options.length);

// Write password to the #password input
function writePassword() {
  var criteriaSelected = getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (criteriaSelected) {

  }
  passwordText.value = password;

}

// When button clicked, console says generatePassword() is not defined so we need to define this function  
// Function would be defined by prompt criteria chosen
function generatePassword() {
  var password = " ";
// Validate input
// Generate Password based on criteria
// Password shown in box
for (var i = 0; i < characterLength; i++) {
  var optionIndex =  Math.floor(Math.random() * userChoice.length);
  password = password + userChoice[optionIndex]
}
return password; 
}

// getPrompts() returning undefined in console after selecting a number within range instead of going through rest of prompts?
function getPrompts() {
  userChoice = [];
  characterLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)")) //needed parseInt function in order to return an integer
  
  if (characterLength < 8 || characterLength > 128 ) {
    alert("Character length needs to be a number, 8 - 128.");
    return false;
  }

  if (confirm("Do you want your password to include lowercase letters? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(lowerCaseOptions);
    alert("OK! Your new password will include lowercase letters.");
    //if not then do not concat arrays / something needs to happen?
  } else {
    alert("Your new password will NOT include lowercase letters.");
  }

  if (confirm("Do you want your password to include uppercase letters? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(upperCaseOptions);
    alert("OK! Your new password will include uppercase letters.");
    //if not then do not concat arrays / something needs to happen?
  } else {
    alert("Your new password will NOT include uppercase letters.");
  }

  if (confirm("Do you want your password to include numbers? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(numberOptions);
    alert("OK! Your new password will include numbers.");
    //if not then do not concat arrays / something needs to happen?
  } else {
    alert("Your new password will NOT include numbers.");
  }

  if (confirm("Do you want your password to include special characters? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(specialCharOptions);
    alert("OK! Your new password will include special characters.");
    //if not then do not concat arrays / something needs to happen?
  } else {
    alert("Your new password will NOT include special characters.");
  return true;
}
}