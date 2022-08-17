// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Random password generator function
function generatePassword() {

  // Password criteria stored into key-values
  const allCharacters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    specials: '!@#$%^&*()'
  };

  // combinedChars is empty but will gain strings based on users input
  // generatedPass is the final product of the generatePassword() function
  var combinedChars = "";
  var generatedPass = "";

  // This provides a intitial prompt asking for the users desired password length with <> conditions
  var passwordLength = window.prompt('How many characters would you like your password to contain?');
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.alert('Continue to characters types');
    } else if (passwordLength > 128 || passwordLength < 8) {
      window.alert('Please enter a number between 8 and 128');
      return null;
    } else {
      window.alert('please make sure your value is number');
      return null;
    }

  // This statement determines whether to add lowercase chars to the combined pool
  var addLowercaseChars = window.confirm('Click OK to confirm using lowercase characters');
    if (addLowercaseChars) {
      combinedChars += allCharacters.lowercase;  
    }

  // This statement determines whether to add uppercase chars to the combined pool
  var addUppercaseChars = window.confirm('Click OK to confirm using uppercase characters');
    if (addUppercaseChars) {
      combinedChars += allCharacters.uppercase;
    }
  
  // This statement determines whether to add numerical chars to the combined pool
  var addNumericalChars = window.confirm('Click OK to confirm using numerical characters');  
    if (addNumericalChars) {
      combinedChars += allCharacters.numbers;
    }
  
  // This statement determines whether to add special chars to the combined pool
  var addSpecialChars = window.confirm('Click OK to confirm using special characters');
    if (addSpecialChars) {
      combinedChars += allCharacters.specials;
    }    

    // If the user selects no for each char type then this message is displayed
    if (
      !addLowercaseChars &&
      !addUppercaseChars &&
      !addNumericalChars &&
      !addSpecialChars
      ) {
        window.alert('Please select atleast one type of characters for password');
        return generatePassword();
      }

  // For loop that loops through added char string with desired length to generate a random password 
  for (let i = 0; i < passwordLength; i++) {
    generatedPass += combinedChars[Math.floor(Math.random() * combinedChars.length)];
  }
  return generatedPass; // Returns random password to textbox 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
