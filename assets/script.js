// Assignment Code
let criteria="Password Criteria:"+"\n"+"1. Password mush be between 8 to 128 characters long." + "\n" +
"2. Password should include lowercase, uppercase, number and/or special characters.";

let lengthCriteria = "Choose a length of at least 8 to 128 characters";


let lowercase="abcdefghijklmnopqrstuvwxyz"; // lowercase characters

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //uppercase characters

let numeric="0123456789" // numeric characters

let specialCharacters=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //special characters

let generateBtn = document.querySelector("#generate");
function generatePassword() {

  let finalCharacter=""; // empty string to store all the character type a user wants.

  alert(criteria); //alerts the passward criteria

  let length = prompt(lengthCriteria)

  //passward must be between 8 to  128 character.
  if (length < 8 || length > 128) {
    alert("Password length has to be between 8 to 128 characters");
    generatePassword();
  }

  //if user wants lowercase character in their passward add lower case characters to the string finalCharacters
  if(window.confirm("Do you want to include lowercase character")){
    finalCharacter+=lowercase;
  }

  //if user wants uppercase character in their passward add uppercase characters to the string finalCharacters
  if(window.confirm("Do you want to include uppercase character")){
    finalCharacter+=uppercase;
  }

  //if user wants numeric characters in their passward add numeric characters to the string finalCharacters
  if(window.confirm("Do you want to include numeric character")){
    finalCharacter+=numeric;
  }

  //if user wants special characters in their passward add special characters to the string finalCharacters
  if(window.confirm("Do you want to include special character")){
    finalCharacter+=specialCharacters;
  }

  //user must choose one character type
  if(finalCharacter ===""){
    alert("must choose either uppercase or lowercase or numeric or special character");
    generatePassword();
  }
  // console.log(finalCharacter);
  
  //creats a random passward based on the users choie of character types that got added in the string finalCharacter
  let randomPassword="";
  for(let i=0;i<length;i++){
    randomPassword = randomPassword + finalCharacter.charAt(Math.floor(Math.random() * finalCharacter.length));
  }

  //alerts the passward in a alert box
  alert("Your password is: "+randomPassword);

  return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
