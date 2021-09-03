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


var pwdParameters = {
  //length:6,
  minLength: 8,
  maxLength: 128,
  useLowercase: true,
  useUppercase: true,
  useNumbers: true,
  useSpecial: true
};

function generatePassword(){
  // declare some local variables
  
  // Prompt for the password length and check if it is between min and max - loop if its outside of the parameters
  do{ 
    pwdParameters.length = parseInt(prompt("How long would you like your password \nIt must be between "
    + pwdParameters.minLength + " and " + pwdParameters.maxLength + " characters"));

    if (pwdParameters.minLength <= pwdParameters.length && pwdParameters.length <= pwdParameters.maxLength){
      alert("Correct Length of " + pwdParameters.length);
      correctLength = true;
    }else if (isNaN(pwdParameters.length)){ //if cancel is pressed or letters entered
      alert("You must use a number between "+ pwdParameters.minLength + " and " + pwdParameters.maxLength + " characters");
      return null;
    }else{ // length is outside of set parameters
      alert("Incorrect length\nThe length must be between "+ pwdParameters.minLength + " and " + pwdParameters.maxLength + " characters");
      correctLength = false;
    }
  }while (! correctLength);

  if (confirm("Would you like to use lowercase charaters")) {
    pwdParameters.useLowercase = true;
    alert("Lower case selected");
  }
  if (confirm("Would you like to use UPPERCASE charaters")) {
    pwdParameters.useUppercase = true;
    alert("UPPER case selected");
  }
  if (confirm("Would you like to use numbers charaters")) {
    pwdParameters.useNumbers = true;
    alert("Numbers selected");
  }
  if (confirm("Would you like to use special charaters charaters")) {
    pwdParameters.useSpecial = true;
    alert("Special charaters selected");
  }

  if (pwdParameters.useLowercase || pwdParameters.upperCaseChars) {
    alert("case selected");
  }



  return pwdParameters.length;

}// End of function




var usabeleChars = {
  blank: [],
  lowerCaseChars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upperCaseChars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numericalChars: ['0','1','2','3','4','5','6','7','8','9'],
  specialChars: ['@','%','+',"\\",'/',"\'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
}

var usableChars =[];
var generatedPassword = '';
var str = '';

if (pwdParameters.useLowercase){
  usableChars = usableChars.concat(usabeleChars.lowerCaseChars);
};
if (pwdParameters.useUppercase){
  usableChars= usableChars.concat(usabeleChars.upperCaseChars);
};
if (pwdParameters.useNumbers){
  usableChars= usableChars.concat(usabeleChars.numericalChars);
};
if (pwdParameters.useSpecial){
  usableChars= usableChars.concat(usabeleChars.specialChars);
};

for (i=0; i<pwdParameters.length; i++) {
  char = Math.floor(Math.random()*usableChars.length);
  str = str + usableChars[char];
  generatedPassword = generatedPassword + usableChars[char];
}


console.log(usableChars[0]);
console.log(usableChars.length)
console.log(generatedPassword)
console.log(str)
console.log(str.length)