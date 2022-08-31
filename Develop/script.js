// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //An array of ints, referring to Uppercase,Lowercase,Numerics, and SpecialCharacters respectively with the number of potential chars
  const choices = [0, 1, 0, 0];
  //A 2D Array that contains all potential choices
  const choices2D = [];
  //Lowercase characters, index 0
  choices2D[0] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //Uppercase characters, index 1
  choices2D[1] = [];
  for(let i=0;i<choices2D[0].length;i++){
    choices2D[1].push(choices2D[0][i].toUpperCase());
  };
  //Numerics, index 2
  choices2D[2] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //Special Characters, index 3
  choices2D[3] = ' !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~'.split("");

  //the total number of potential characters the password could contain
  const choicesTotalVal = (choices[0] * 26) + (choices[1] * 26) + (choices[2] * 10) + (choices[3] * 33);
  const choicesTotal = [];


  //a for loop that iterates through all potential characters
  for(let i=0;i<choices2D.length;i++){
    //if the index in question is default(0), skip
    if(choices[i]!==0){
      continue;
    }

    //else, add them to total choices
    for(let i2=0;i2<choices2D[i].length;i2++){
      choicesTotal.push(choices2D[i][i2]);
    }
  }

  //prompt the user for their choices in a loop
  //in the loop, set the digit in the array to the total num of potential characters(26,26,10,33)

  
  //if(choices)

  //the password, which this password will return
  let password = [];

  //the legnth of the password to be generated
  let passwordLength = Math.floor(Math.random() * (120) + 8);

  //the main loop which generates password char by char
  for (i = 0; i < passwordLength; i++) {
    password.push(choicesTotal[Math.floor(Math.random() * choicesTotal.length)]);
  }
  
  password = password.toString();

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
