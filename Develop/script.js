// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = {
  "chars": [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "", "{", "|", "}", "~" ],
  "letters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "numbers": [0,1,2,3,4,5,6,7,8,9],
  "finalPW": []
}

// Write password to the #password input
function generatePassword() {
  // Receive User input regarding password length
  var pwLength = Number(prompt("How many characters would you like your password to be?"));
  var specCharsChoice = confirm("Would you like to use special characters in your password?"); 
  var lettersChoice = confirm("Would you like to use Letters in your password");
  var numbersChoice = confirm("Would you like to use numbers in your password");

  if (specCharsChoice && lettersChoice && numbersChoice) {
    var finalPW = specialCharacters.finalPW.concat(specialCharacters.chars).concat(specialCharacters.letters).concat(specialCharacters.numbers);
    // console.log(finalPW);
  }
  // if (lettersChoice){
  //   specialCharacters.finalPW.push(specialCharacters.letters);
  // } 
  // if (numbersChoice) {
  //   specialCharacters.finalPW.push(specialCharacters.numbersChoice);
  // }

  // The segmentLength will be calculated depending on how many variants(chars/letter/numbers) the user selects Each segment should be equal
  var generatedPassword = '';
  function createPW(){
    for (index = 0; index < pwLength;){
      var randomIndex = Math.floor(Math.random() * finalPW.length);
      var generatedChar = finalPW[randomIndex];
      generatedPassword += generatedChar;
      index++;
      console.log(generatedPassword);
      // console.log(index, generatedPassword.length);
    }
  }
  // If not an Int Value, user Retry;
  if (isNaN(pwLength)) {
    alert('Please enter a REAL number; ex.. 1,2,3,4,5');
    generatePassword();} 
  else if (pwLength >= 8 && pwLength <= 128){
    createPW();
    return generatedPassword;}
  else {
    generatePassword();}
};



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


// For each choice the user chooses, some list will be appended to include the options; if chars is selected; chars list + empty list
  // Password must be between 8 and 128 Characters long(initially)
// generate 1 set of alphabetic arrays/dict object
// generate 1 set of special Characters/ dict object
// Total length of array1 & array2 should equal the password length
  // This should be done with a for (loop... sum of pw.length increases, generating random values until i = userInput