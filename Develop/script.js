// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// My code
function generatePassword() {
  console.log('Clicked button');

  //Password criteria
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var specials = '!@#$%^&*()';

  











  
  // Generated password will go here
  return 'Generated password here';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
