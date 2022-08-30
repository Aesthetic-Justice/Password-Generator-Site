// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //An array of ints, referring to Uppercase,Lowercase,Numerics, and SpecialCharacters respectively with the number of potential chars
  const choices = [0,0,0,0];
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numerics = ['0','1','2','3','4','5','6','7','8','9'];
  const specialCharacters = ' !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~'.split("");
  

  //prompt the user for their choices in a loop
    //in the loop, set the digit in the array to the total num of potential characters(26,26,10,33)

  //the total number of potential characters the password could contain
  choicesTotal = (choices[0]*26)+(choices[1]*26)+(choices[2]*10)+(choices[3]*33);
  
  //the password, which this password will return
  let password = "";
  
  //the legnth of the password to be generated
  let passwordLength = Math.floor(Math.random*(128-8)+8);

  //the main loop which generates password char by char
  for(i=0;i<passwordLength;i++){
    for(i2=0;i2<choices.length;i2++){
    }
  }

  //returns the result
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
