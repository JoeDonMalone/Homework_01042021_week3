// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = {
  "chars": [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "", "{", "|", "}", "~" ],
  "letters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "numbers": [1,2,3,4,5,6,7,8,9]
}
var generatedPasswordLength = 0

  function generatePassword() {
  // Need to receive User input regarding password length
  var pwLength = Number(prompt("How many characters would you like your number to be?"));
  // If not an Int Value, user Retry;
  if (isNaN(pwLength)) {
    alert('Please enter a REAL number; ex.. 1,2,3,4,5');
    generatePassword();
  } else {}
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



  // Password must be between 7 and 120 Characters long(initially)
// generate 1 set of alphabetic arrays/dict object
// generate 1 set of special Characters/ dict object
// Total length of array1 & array2 should equal the password length
  // This should be done with a for (loop... sum of pw.length increases, generating random values until i = userInput