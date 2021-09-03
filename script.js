// Assignment Code
// var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // declare some local variables
}
var pwdParameters = {
  length:12,
  minLength: 8,
  maxLength: 128,
  useLowercase: true,
  useUppercase: true,
  useNumbers: true,
  useSpecial: true
};

var usabeleChars = {
  blank: [],
  lowerCaseChars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upperCaseChars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numericalChars: ['0','1','2','3','4','5','6','7','8','9'],
  specialChars: ['@','%','+',"\\",'/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
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