// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //A 2D Array that contains all potential choices
  const choices2D = [];
  //Lowercase characters, index 0
  choices2D[0] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //Uppercase characters, index 1
  choices2D[1] = [];
  for (let i = 0; i < choices2D[0].length; i++) {
    choices2D[1].push(choices2D[0][i].toUpperCase());
  };
  //Numerics, index 2
  choices2D[2] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //Special Characters, index 3
  choices2D[3] = ' !\"#$%&\'()*+\,-./:;<=>?@[\\]^_`{|}~'.split("");

  //An array of bools, referring to Uppercase,Lowercase,Numerics, and SpecialCharacters respectively
  const choices = [0, 0, 0, 0];

  //Confirm the 4 choices
  let confirmchoice;
  do {
    confirmchoice = confirm("Do you want lowercase characters in your password?");
    if (confirmchoice) {
      choices[0] = 1;
    };

    confirmchoice = confirm("Do you want uppercase characters in your password?");
    if (confirmchoice) {
      choices[1] = 1;
    };

    confirmchoice = confirm("Do you want numeric characters in your password?");
    if (confirmchoice) {
      choices[2] = 1;
    };

    confirmchoice = confirm("Do you want special characters in your password?");
    if (confirmchoice) {
      choices[3] = 1;
    };
    if(choices[0] === 0 && choices[1] === 0 && choices[2] === 0 && choices[3] === 0){
      window.alert("Invalid Entry: A password cannot be generated if all character options are declined.");
      continue;
    };
  } while (choices[0] === 0 && choices[1] === 0 && choices[2] === 0 && choices[3] === 0);

  //the total number of potential characters the password could contain
  const choicesTotalVal = (choices[0] * 26) + (choices[1] * 26) + (choices[2] * 10) + (choices[3] * 33);
  const choicesTotal = [];

  //a for loop that iterates through all potential characters
  for (let i = 0; i < choices2D.length; i++) {
    //if the index in question is default(0), skip
    if (choices[i] === 0) {
      continue;
    };

    //else, add them to total choices
    for (let i2 = 0; i2 < choices2D[i].length; i2++) {
      choicesTotal.push(choices2D[i][i2]);
    };
  };

  //the password, which this password will return
  let password = [];

  //the legnth of the password to be generated
  let passwordLength;

  //Loop to ensure the password entry is valid
  do {
    //prompt the user for the length of the password
    passwordLength = window.prompt("What length do you want the password to be?(min.8/max.128");

    //If the entered value is Not a Number, alert the user, then reset
    if (isNaN(passwordLength)) {
      window.alert("Invalid Entry: Not a Number.\nPassword length must be between 8 and 128.")
      continue;
    };

    //if passowrd is out of bounds, alert the user, then reset
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid Entry: Out of Bounds.\nPassword length must be between 8 and 128.");
      continue;
    };
    //loop password input until input is both a Number, and within bounds
  } while (passwordLength < 8 || passwordLength > 128||isNaN(passwordLength)==true);

  //the main loop which generates password char by char
  for (i = 0; i < passwordLength; i++) {
    password.push(choicesTotal[Math.floor(Math.random() * choicesTotal.length)]);
  };

  //returns the result
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
