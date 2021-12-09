// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";
var numbers = "123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = window.prompt("How many characters do you want in password?");
  if (length <= 128 && length >= 8) {
    var confirmLower
    var confirmUpper
    var confirmNumber
    var confirmSpecial
  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
