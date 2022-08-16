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
  const allCharacters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    specials: '!@#$%^&*()'
  };

  //
  var combinedChars = "";
  var generatedPass = "";

  //
  var passwordLength = window.prompt('How many characters would you like your password to contain?');
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.confirm('Continue to characters types');
    } else if (passwordLength > 128 || passwordLength < 8) {
      window.alert('Please enter a number between 8 and 128');
      return null;
    } else {
      window.alert('please make sure your value is number');
    }

  //
  var addLowercaseChars = window.confirm('Click OK to confirm using lowercase characters');
    if (addLowercaseChars) {
      combinedChars += allCharacters.lowercase;  
    }

  //
  var addUppercaseChars = window.confirm('Click OK to confirm using uppercase characters');
    if (addUppercaseChars) {
      combinedChars += allCharacters.uppercase;
    }
  
  //
  var addNumericalChars = window.confirm('Click OK to confirm using numerical characters');  
    if (addNumericalChars) {
      combinedChars += allCharacters.numbers;
    }
  
  //
  var addSpecialChars = window.confirm('Click OK to confirm using special characters');
    if (addSpecialChars) {
      combinedChars += allCharacters.specials;
    }    

    //
    if (
      !addLowercaseChars &&
      !addUppercaseChars &&
      !addNumericalChars &&
      !addSpecialChars
      ) {
        window.alert('Please select atleast one type of characters for password');
        return null;
      }

  //
  for (let i = 0; i < passwordLength; i++) {
    generatedPass += combinedChars[Math.floor(Math.random() * combinedChars.length)];
  }
  return generatedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
