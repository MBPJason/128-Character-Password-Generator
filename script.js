// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Takes the result of finalPassword and stores it
  function generatePassword() {
    var passwordLength = numCharacters(); // Placeholder to get length of characters
    var lowerABC = "abcdefghijklmnopqrstuvwxyz";
    var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specials = "!@#$%^&*+~}{;/";

    // Checks user first input and corrects them to make the right choice
    function numCharacters() {
      while (true) {
        let input = prompt(
          "Choose between 8 to 128 characters for your password."
        );

        if (input == null) {
          //user hit cancel
          alert("That sucks.");
          input;
          // user gives info but not with in parameters
        } else if (
          parseFloat(input) < 8 ||
          parseFloat(input) > 128 ||
          isNaN(input)
        ) {
          alert("Invalid input.");
        } else {
          // returns number
          return parseInt(input);
        }
      }
    }

    // Prompts user for choice of characters to use in password generator
    var charLower = confirm(
      "Would you like characters to be included lowercase? Hit 'OK' for yes, 'Cancel' for no"
    );
    var charUpper = confirm(
      "Would you like characters to be included uppercase? Hit 'OK' for yes, 'Cancel' for no"
    );
    var charNumeric = confirm(
      "Would you like numbers to be included? Hit 'OK' for yes, 'Cancel' for no"
    );
    var charSpecial = confirm(
      "Would you like special characters to be included? Hit 'OK' for yes, 'Cancel' for no"
    );
    // If user doesn't select a choice it exits out
    if (
      charLower === false &&
      charUpper === false &&
      charNumeric === false &&
      charSpecial === false
    ) {
      alert("You must select at least one");
      return;
    }

    // Sets tempPassString to gain one of the corresponding strings based on user choice
    var tempPassString = ""; //Empty string template to push strings
    if (charLower === true) {
      tempPassString = tempPassString.concat(lowerABC);
    }
    if (charUpper === true) {
      tempPassString = tempPassString.concat(upperABC);
    }
    if (charNumeric === true) {
      tempPassString = tempPassString.concat(numbers);
    }
    if (charSpecial === true) {
      tempPassString = tempPassString.concat(specials);
    }

    // TO DO: THIS IS THE ONLY RUNNING FUNCTION THAT CALLS THE OTHER FUNCTIONS IN TO OPERATION
    // Sets finalPassword based on user length choice and character choice
    var finalPassword = ""; //Empty String for template
    for (i = 0; i < passwordLength; i++) {
      // Sets finalPassword to equal/gain what the randomizer drops
      finalPassword += tempPassString.charAt(
        // Randomizer
        Math.floor(Math.random() * tempPassString.length)
      );
    }
    return finalPassword;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
