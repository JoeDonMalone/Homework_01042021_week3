// Assignment Code
var generateBtn = document.querySelector("#generate");
var options = {
  "chars": [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "", "{", "|", "}", "~" ],
  "letters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "numbers": [0,1,2,3,4,5,6,7,8,9],
  "finalPW": []
};
var generatedPassword = '';

// Write password to the #password input
function generatePassword() {
  var pwLength = Number(prompt("How many characters would you like your password to be?"));
  // If not an Int Value, user Retry;
  // if (isNaN(pwLength)) {
  //   alert('Please enter real numbers only; ex.. 1,2,3,4,5');
  //   return generatePassword();}
  // else if (!(pwLength >= 8 && pwLength <= 128 )){
  //   alert("Please enter a number >=0 but <= 128")
  //   // return generatePassword();}
  var specCharsChoice = confirm("Would you like to use special characters in your password?"); 
  var lettersChoice = confirm("Would you like to use letters in your password");
  var numbersChoice = confirm("Would you like to use numbers in your password");
    
  function createPW(){
    for (index = 0; index < pwLength;){
      var randomIndex = Math.floor(Math.random() * finalPW.length);
      var generatedChar = finalPW[randomIndex];
      generatedPassword += generatedChar;
      index++;
      // console.log(index, generatedPassword;
    }
  }
  
  if (specCharsChoice && lettersChoice && numbersChoice) {
    var finalPW = options.finalPW.concat(options.chars).concat(options.letters).concat(options.numbers);
  } 
  else if (!(specCharsChoice) && lettersChoice && numbersChoice ) {
    var finalPW = options.finalPW.concat(options.letters).concat(options.numbers);
  } 
  else if (!(specCharsChoice) && !(lettersChoice) && numbersChoice) {
    var finalPW = options.finalPW.concat(options.numbers);
  }
  else if (!(specCharsChoice) && lettersChoice  && !(numbersChoice)) {
    var finalPW = options.finalPW.concat(options.letters);
  }
  else if (!(specCharsChoice) && lettersChoice  && numbersChoice) {
    var finalPW = options.finalPW.concat(options.letters).concat(options.numbers);
  }
  else if (specCharsChoice && !(lettersChoice)  && !(numbersChoice)) {
    var finalPW = options.finalPW.concat(options.chars);
  }
  else if (specCharsChoice && !(lettersChoice)  && numbersChoice) {
    var finalPW = options.finalPW.concat(options.chars).concat(options.numbers);
  }
  else if (specCharsChoice && lettersChoice  && !(numbersChoice)) {
    var finalPW = options.finalPW.concat(options.chars).concat(options.letters);
  }
  else if (!(specCharsChoice && lettersChoice  && numbersChoice)) {
    alert('At least one of the Unique Identifiers must be selected!');
    return generatePassword();
  }
  createPW();
  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)