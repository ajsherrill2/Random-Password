# <Your-Project-Title>

## Description

In this project I was tasked with creating an application to a web page including a generate random password button. This application enabled  employees to randomly generate a password with the click of a button and a few criteria requests to determine what the length and character types that will be included in the employees new password. I learned the use of if/else conditional statements and for statements to and the benefit to variables and key-value objects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

The steps towards installing this application to the web page iclude:

First cloning to starter code into my own personal repository

Next making sure I have all neccessary files in order for expected application to run according to its design (Html, CSS, Javascript)

The Js file is where I am tasked to add a function so once I have cloned and commited my new code in my repository I can begin deducing where I need to focus my attention.

I noticed that the generatePassword() function has not been called so in order for the generate password button to perform the desired program a function had to be written here.

I began with providing a constant "allCharacters" and gave it 4 key-values which represented the 4 strings of character types the user could choose between.

Then I created to empty strings one that would gain strings as the user selects options, the other that would gain the new pool of strings plus with a math.random method to give each index in the length of the string a random character.

After creating initial variables i then used variables to declare a window prompt which included a prompt for password length and an if statement depending on whether the users answer choice met number range requirements.

After this prompt a series of confirmations show that are declared to their respective variable name such as "addLowercaseChar" which will include or not include said string into pooled string

As long as atleast one type of characters were selected my final if statement asking user to please select atleast one type will not be truthy.

One of the most crutial steps in this whole function is the for loop statement which i used to declare an index to the passwordlength variable with an execute command to randomize each index in the pooled string and add that to the previously empty string "generatedPass"

Once that is executed to loop return this new generatedPass string giving the user a randomly generated password  within the application text box.


## Usage

You can find the new live application at https://ajsherrill2.github.io/Random-Password/

<img src=".\assets\images\screenshot1.png" width="70%">

Once inside the application you will see password generator including a Generate Password button, if the user would like to create a random password they must first click the button.

<img src=".\assets\images\screenshot2.png" width="70%">

After clicking the button a prompt appears asking home many characters they would like their password to contain, if the user inserts a number less than 8 or greater than 128 an additional prompt will appear asking the user to stay with the acceptable range. If the user inserts a character that is not a number an additional promp will appear asking the user to make sure to put only numbers.

<img src=".\assets\images\screenshot3.png" width="70%">

If the users length is accepted a new prompt appears asking user to continue.

<img src=".\assets\images\screenshot4.png" width="70%">

After users clicks OK four sequential confirmations appear asking for the user to confirm including a specific type of characters such as, lowercase and uppercase letters, numbers and special characters. Which the user can click OK to include or cancel to not include.

<img src=".\assets\images\screenshot5.png" width="70%">

Finally after last confirmation within the application text box a new randomly generated password containing the users preference on length and character types is printed.

## Credits

I collaberated with:

 Shelby Hernandez https://github.com/Shernandez927/new-generation

 Gloriana https://github.com/ggggglo/Password_Generator_Cleanup

 Tutorials:

 Youtube https://www.youtube.com/watch?v=O-79Cb5s9U4&t=394s