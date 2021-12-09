// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

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
    var confirmLower = window.confirm("Do you want lower case letters?");
    var confirmUpper = window.confirm("Do you want upper case letters?");
    var confirmNumber = window.confirm("Do you want to add numbers?");
    var confirmSpecial = window.confirm("Do you want to add special characters?");

    var charSet = "";
    var password = "";

    if ((confirmLower === false) && (confirmUpper === false) && (confirmNumber === false) && (confirmSpecial === false)) {
      alert("Please be sure to choose at least one character type.");
      return ("Your Secure Password");
    }
    if (confirmLower === true) {
      charSet += lowerCase;
    }
    if (confirmUpper === true) {
      charSet += upperCase;
    }
    if (confirmNumber === true) {
      charSet += numbers;
    }
    if (confirmSpecial === true) {
      charSet += special;
    }

    for (var i = 0; i < length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return (password);
  } else {
    alert("Please enter a number between 8-128");

    return ("Your secure password");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
