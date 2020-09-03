// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var passwordLength = numCharacters();
    var lowerABC = "abcdefghijklmnopqrstuvwxyz";
    var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specials = "!@#$%^&*+~}{;/";

    function numCharacters() {
      while (true) {
        let input = prompt(
          "Choose between 8 to 128 characters for your password."
        );

        if (input == null) {
          //user hit cancel
          alert("That sucks.");
          return true;
        } else if (input < 8 || input > 128 || isNaN(input)) {
          alert("Invalid input.");
        } else {
          return parseInt(input);
        }
      }
    }

    console.log(passwordLength);

    var charLower = confirm(
      "Would you like characters to be included lowercase? Y for yes, N for no"
    );
    var charUpper = confirm(
      "Would you like characters to be included uppercase? Y for yes, N for no"
    );
    var charNumeric = confirm(
      "Would you like numbers to be included? Y for yes, N for no"
    );
    var charSpecial = confirm(
      "Would you like special characters to be included? Y for yes, N for no"
    );
    if (
      charLower === false &&
      charUpper === false &&
      charNumeric === false &&
      charSpecial === false
    ) {
      alert("You must select at least one");
      return;
    }

    var tempPassString = "";
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
    console.log(tempPassString);

    var finalPassword = "";
    for (i = 0; i < passwordLength; i++) {
      finalPassword += tempPassString.charAt(
        Math.floor(Math.random() * tempPassString.length)
      );
    }
    console.log(finalPassword);
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
