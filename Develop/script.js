// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // generatePassword is an empty function, in this function is where magic happens
  var passwordText = document.querySelector("#password");
  
  // My code
  function generatePassword() {
    var characters = {
      lowerChars: 'abcdefghijklmnopqrstuvwxyz',
      upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numberChars: '0123456789',
      specialsChars: '!@#$%^&*()'
    }
    
    window.prompt('How many characters would you like your password to contain?');
    if(String.length > 8 && String.length < 128) {
      window.alert('Click OK to confirm special characters')
    } else return;
    




  
  
  
  
  
  
  }
  
  // Displays password on screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
