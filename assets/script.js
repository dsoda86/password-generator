// Given button and event listener code to work with
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Arrays with possible values for each criteria.
var characterLength = " ";
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "]", "{", "}", "|", ";", ":", "'", ",", "<", ">", ".", "/", "?"];
var userChoice = [];

// Prompts user for criteria one at a time with alerts to validate responses after each one. Concatenation of selected arrays results from 'OK' clicks.
function getPrompts() {
  userChoice = [];
  characterLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)")) 
// NaN used as a condition to preventtyping letters bug.
  if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
    alert("Character length needs to be a number, 8 - 128.");
    return false;
  } else {
    alert(`Will do! Your new password will be ${characterLength} characters long.`)
  }

  if (confirm("Do you want your password to include lowercase letters? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(lowerCaseOptions);
    alert("OK! Your new password will include lowercase letters.");
    
  } else {
    alert("Your new password will NOT include lowercase letters.");

  }

  if (confirm("Do you want your password to include uppercase letters? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(upperCaseOptions);
    alert("OK! Your new password will include uppercase letters.");
    
  } else {
    alert("Your new password will NOT include uppercase letters.");

  }

  if (confirm("Do you want your password to include numbers? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(numberOptions);
    alert("OK! Your new password will include numbers.");
    
  } else {
    alert("Your new password will NOT include numbers.");

  }

  if (confirm("Do you want your password to include special characters? Click 'OK' for YES and 'Cancel' for NO.")) {
    userChoice = userChoice.concat(specialCharOptions);
    alert("OK! Your new password will include special characters.");
    
  } else {
    alert("Your new password will NOT include special characters.");
  return true;
  }

}
// Generate password function, that was previously not defined, uses a for loop and the Math.random method to randomly select the characters to use in the index based on prompt responses.
function generatePassword() {
  var password = " ";

  for (var i = 0; i < characterLength; i++) {
    var optionIndex =  Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[optionIndex]
  }
  return password; 
}
// Write password function calls prompts, generates the password from the responses, and writes the new password inside of the text area.
function writePassword() {
  getPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


