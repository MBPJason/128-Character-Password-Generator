// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  function generatePassword() {
    var length = numCharacters();
    var string = "abcdefghijklmnopqrstuvwxyz"; 
    var numbers = '0123456789';
    var specials = '!@#$%^&*+~}{;/';
    var tempPassString = '';
    var finalPassword = '';
    var passwordReq = {
      lowercase: false,
      uppercase: false,
      numeric: false,
      special: false,
    };


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

    console.log(length);

    // var numCharacters = prompt("Choose between 8 to 128 characters for your password.");
    // var charLower = prompt("Would you like characters to be included lowercase? Y for yes, N for no");
    // var charUpper = prompt("Would you like characters to be included uppercase? Y for yes, N for no");
    // var charNumeric = prompt("Would you like numbers to be included? Y for yes, N for no");
    // var charSpecial = prompt("Would you like special characters to be included? Y for yes, N for no");

    // console.log(numCharacters);
    // console.log(charLower);
    // console.log(charUpper);
    // console.log(charNumeric);
    // console.log(charSpecial);
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
