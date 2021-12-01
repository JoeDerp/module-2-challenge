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
  }
  else if (length < 8 || length > 128) {
      alert("Please choose a length within 8 and 128 characters");
  }
  // When length is valid, prompt for other criteria
  else {
    upper = confirm("Do you want to include uppercase letters?");
    lower = confirm("Do you want to include lowercase letters?");
    num = confirm("Do you want to include numbers?");
    spec = confirm("Do you want to include special characters?");
  };
  
  // Set up character bank for password based on criteria
  var passSet;
  // When all four options are selected
  if (upper && lower && num && spec) {
    passSet = upperSet.concat(lowerSet, numSet, specSet);
  }
  // When three options are selected
  else if (upper && lower && num) {
    passSet = upperSet.concat(lowerSet, numSet);
  }
  else if (upper && lower && spec) {
    passSet = upperSet.concat(lowerSet, specSet);
  }
  else if (upper && num && spec) {
    passSet = upperSet.concat(numSet, specSet);
  }
  else if (lower && num && spec) {
    passSet = lowerSet.concat(numSet, specSet);
  }
  // When two options are selected
  else if (upper && lower) {
    passSet = upperSet.concat(lowerSet);
  }
  else if (upper && num) {
    passSet = upperSet.concat(numSet);
  }
  else if (upper && spec) {
    passSet = upperSet.concat(specSet);
  }
  else if (lower && num) {
    passSet = lowerSet.concat(numSet);
  }
  else if (lower && spec) {
    passSet = lowerSet.concat(specSet);
  }
  else if (num && spec) {
    passSet = numSet.concat(specSet);
  }
  // When one option is selected
  else if (upper) {
    passSet = upperSet;
  }
  else if (lower) {
    passSet = lowerSet;
  }
  else if (num) {
    passSet = numSet;
  }
  else if (spec) {
    passSet = specSet;
  }
  // When no options are selected
  else if (!upper && !lower && !num && !spec) {
    alert("Please choose at least one character criteria for your password");
  };

  // Password generation
  var pass = [];
  for (var i=0; i < length; i++) {
    var randChar = passSet[Math.floor(Math.random() * passSet.length)];
    pass.push(randChar);
  }
  password = pass.join("");
  return password;
}

// dispPassword will display the generated password to the text box
function dispPassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", dispPassword);