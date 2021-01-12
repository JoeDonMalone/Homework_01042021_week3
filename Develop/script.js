// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var options = {
    "chars": [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "", "{", "|", "}", "~" ],
    "letters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    "numbers": [0,1,2,3,4,5,6,7,8,9],
    "finalPW": []
  };

  let generatedPassword = "";
  var pwLength = Number(prompt("How many characters would you like your password to be?"));
  // If not an Int Value, user Retry This evaluation is presented here, rather than after the user has made multiple;
  if (isNaN(pwLength)) {
    alert('Please enter real numbers only; ex.. 1,2,3,4,5');
    return generatePassword();
  } else if (!(pwLength >= 8 && pwLength <= 128 )){
      alert("Please enter a number >=0 but <= 128")
      return generatePassword();
    }
    
  var specCharsChoice = confirm("Would you like to use special characters in your password?"); 
  var lettersChoice = confirm("Would you like to use letters in your password");
  var numbersChoice = confirm("Would you like to use numbers in your password");
    
  function createPW(){
    for (var index = 0; generatedPassword.length < pwLength;index++){
      var randomIndex = Math.floor(Math.random() * finalPW.length);
      var generatedChar = finalPW[randomIndex];
      generatedPassword += generatedChar;
      // console.log(index, generatedPassword);
    }
  }
  
  if (specCharsChoice && lettersChoice && numbersChoice) {
    var finalPW = options.finalPW.concat(options.chars).concat(options.letters).concat(options.numbers);
  } else if (!(specCharsChoice) && lettersChoice && numbersChoice ) {
    var finalPW = options.finalPW.concat(options.letters).concat(options.numbers);
  } else if (!(specCharsChoice) && !(lettersChoice) && numbersChoice) {
    var finalPW = options.finalPW.concat(options.numbers);
  } else if (!(specCharsChoice) && lettersChoice  && !(numbersChoice)) {
    var finalPW = options.finalPW.concat(options.letters);
  } else if (specCharsChoice && !(lettersChoice)  && !(numbersChoice)) {
    var finalPW = options.finalPW.concat(options.chars);
  } else if (specCharsChoice && !(lettersChoice)  && numbersChoice) {
    var finalPW = options.finalPW.concat(options.chars).concat(options.numbers);
  } else if (specCharsChoice && lettersChoice  && !(numbersChoice)) {
    var finalPW = options.finalPW.concat(options.chars).concat(options.letters);
  } else if (!(specCharsChoice && lettersChoice && numbersChoice)) {
    alert("Please choose at least one of the configuration options");
    return generatePassword();
  } createPW();
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)