// Set up user defined variables
var length;
var upper;
var lower;
var num;
var spec;

// Set up specified character sets
upperSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
lowerSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
numSet = ['0','1','2','3','4','5','6','7','8','9'];
specSet = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// writePassword function prompts for criteria, puts out password to #password element
function writePassword() {
  // Prompt for length
  length = prompt("Please input desired password length between 8 and 128 characters:");
  // Check for length validity, if does not meet criteria will have to repush button
  if (!length) {
      alert("Please enter a length");
  } else if (length < 8 || length > 128) {
      alert("Please choose a length within 8 and 128 characters");
  // When length is valid, prompt for other criteria
  } else {
    upper = confirm("Do you want to include uppercase letters?");
    lower = confirm("Do you want to include lowercase letters?");
    num = confirm("Do you want to include numbers?");
    spec = confirm("Do you want to include special characters?");
  };
  
  
  
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);