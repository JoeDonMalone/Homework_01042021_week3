// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = {
  "chars": [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "", "{", "|", "}", "~" ],
  "letters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "numbers": [0,1,2,3,4,5,6,7,8,9]
}
// Write password to the #password input
function generatePassword() {
  // Need to receive User input regarding password length
  var pwLength = Number(prompt("How many characters would you like your password to be?"));
  var generatedPassword = '';
  console.log(generatedPassword.length)
  // If not an Int Value, user Retry;
  if (isNaN(pwLength)) {
    alert('Please enter a REAL number; ex.. 1,2,3,4,5');
    generatePassword();
  } else if (pwLength >= 8 && pwLength <= 128){
    // alert("Length Req Met");
    // var specCharsChoice = confirm("Would you like to use special characters in your password?");    
    // var lettersChoice = confirm("Would you like to use Letters in your password");
    // var numbersChoice = confirm("Would you like to use numbers in your password");
    for (index = 0; index < pwLength;){
      var randomIndex = Math.floor(Math.random() * specialCharacters.chars.length);
      var generatedChar = specialCharacters.chars[randomIndex];
      generatedPassword += generatedChar
      index++
      console.log(index, generatedPassword.length); 
    } return generatedPassword;
  } else {
    generatePassword();
  }
};




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



  // Password must be between 8 and 128 Characters long(initially)
// generate 1 set of alphabetic arrays/dict object
// generate 1 set of special Characters/ dict object
// Total length of array1 & array2 should equal the password length
  // This should be done with a for (loop... sum of pw.length increases, generating random values until i = userInput