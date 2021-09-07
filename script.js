// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // declare some local variables
  //pwdParameters = all of the required user input parameters
  var pwdParameters = {
    minLength: 8,
    maxLength: 128,
  };
  //usableChars = array of usable characters and initialise the useSet
  var usableChars = {
    usableCharArray: [],
    lowerCaseChars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upperCaseChars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numericalChars: ['0','1','2','3','4','5','6','7','8','9'],
    specialChars: ['@','%','+',"\\",'/',"\'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
  }
  //generatedPassword variable  
  var generatedPassword = '';

  // Prompt for the password length and check if it is between min and max - loop if its outside of the parameters
    do{ 
    pwdParameters.length = parseInt(prompt("How long would you like your password \nIt must be between "
    + pwdParameters.minLength + " and " + pwdParameters.maxLength + " characters"));

      if (pwdParameters.minLength <= pwdParameters.length && pwdParameters.length <= pwdParameters.maxLength){
        alert("You have selected a password lengh of " + pwdParameters.length);
        correctLength = true;
      }else if (isNaN(pwdParameters.length)){ //if cancel is pressed or letters entered
        alert("You must use a number between "+ pwdParameters.minLength + " and " + pwdParameters.maxLength + " characters");
        return null;
      }else{ // length is outside of set parameters
        alert("Incorrect length\nThe length must be between "+ pwdParameters.minLength + " and " + pwdParameters.maxLength + " characters");
        correctLength = false;
      }
    }while (! correctLength);

    //using window prompts confirm the use of lower, upper, numbers and special characters
    if (pwdParameters.useLowercase = confirm("Would you like to use lowercase characters")) {
      usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.lowerCaseChars);
    }
    if (pwdParameters.useUppercase = confirm("Would you like to use UPPERCASE characters")) {
      usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.upperCaseChars);
    }
    if (pwdParameters.useNumbers = confirm("Would you like to use numbers characters")) {
      usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.numericalChars);
    }
    if (pwdParameters.useSpecial = confirm("Would you like to use special characters charaters")) {
      usableChars.usableCharArray = usableChars.usableCharArray.concat(usableChars.specialChars);
    }
    // Check at least 1 set of chareters has been selected
    if (!(pwdParameters.useLowercase || pwdParameters.useUppercase || pwdParameters.useNumbers || pwdParameters.useSpecial)) {
      alert("Nothing selected\nYou must choose at least 1 set of characters");
      return null;
    }
    
    //for loop to generate the password
    for (i=0; i<pwdParameters.length; i++) {
      char = Math.floor(Math.random()*usableChars.usableCharArray.length);
      generatedPassword += usableChars.usableCharArray[char];
    }
  return generatedPassword;
}// End of function
