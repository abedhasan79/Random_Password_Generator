// Assignment Code
let criteria="Password Criteria:"+"\n"+"1. Password mush be between 8 to 128 characters long." + "\n" +
"2. Password can include lowercase, uppercase, number and/or special characters.";

let lengthCriteria = "Choose a length of at least 8 to 128 characters";

let passCriteria;


let lowercase="abcdefghijklmnopqrstuvwxyz";

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let numeric="0123456789"

let specialCharacters=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

let generateBtn = document.querySelector("#generate");
function generatePassword() {
  let finalCharacter="";
  passCriteria = alert(criteria);

  let length = prompt(lengthCriteria)
  if (length < 8 || length > 128) {
    alert("Password length has to be between 8 to 128 characters");
    generatePassword();
  }
  if(window.confirm("Do you want to include lowercase character")){
    finalCharacter+=lowercase;
  }
  if(window.confirm("Do you want to include uppercase character")){
    finalCharacter+=uppercase;
  }
  if(window.confirm("Do you want to include numeric character")){
    finalCharacter+=numeric;
  }
  if(window.confirm("Do you want to include special character")){
    finalCharacter+=specialCharacters;
  }
  if(finalCharacter ===""){
    alert("must choose either uppercase or lowercase or numeric or special character");
    generatePassword();
  }
  // console.log(finalCharacter);
  
  let randomPassword="";
  for(let i=0;i<length;i++){
    randomPassword = randomPassword + finalCharacter.charAt(Math.floor(Math.random() * finalCharacter.length));
  }
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
