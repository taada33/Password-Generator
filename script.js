//character set arrays that will be appended to the character dictionary if selected
var arrayNumbers = [0,1,2,3,4,5,6,7,8,9];
var arrayLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrayUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arraySpecials = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~",",","<",".",">","/","?",";",":","'","|","[","{","]","}"];

//number variable used to store the length of the password
let length;

//booleans that store whether a specific character set has been selected or not
let special;
let numbers;
let lowerCase;
let upperCase;


//function used to generate the passwords given the input parameters
function generatePassword(length, special, numbers, lowerCase, upperCase){

  //characterArray stores the selected character dictionary
  let characterArray = new Array;
  // passwordArray store the randomly selected characters
  let passwordArray = new Array;

  //conditional statements that add character sets to characterArray
  if(special){
    characterArray = characterArray.concat(arraySpecials);
}
  if(numbers){
    characterArray = characterArray.concat(characterArray, arrayNumbers);
  }
  if(lowerCase){
    characterArray = characterArray.concat(characterArray, arrayLowerCase);
  }
  if(upperCase){
    characterArray = characterArray.concat(characterArray, arrayUpperCase);
  }

// loop that adds new random characters to the end of passwordArray
  for(let i = 0; i < length; i++){

    // chooses a randomly indexed element from characterArray and stores it as a concatenated element in passwordArray
    passwordArray.push(characterArray[Math.floor(Math.random() * characterArray.length)])
  }

  // converts the array of n elements into a string of n characters
  passwordArray = passwordArray.join("");

  return passwordArray;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //confirmation prompt to specify password length
  length = prompt("Choose password length between 8 and 128 characters");

  //filters for length values less than 8 or greater than 128
  if(length < 8 || length > 128){
    alert("Must choose length between 8 and 128 digits!");
    return;
  }

  //Confirmation prompts to specify character sets used
  special = confirm("Generate password with special characters?");
  numbers = confirm("Generate password with numeric characters?");
  lowerCase = confirm("Generate passwords with lowercase characters?");
  upperCase = confirm("Generate passwords with uppercase characters?");

  //returns if a character set has not been selected
  if(!special && !numbers && !lowerCase && !upperCase){
    alert("Must choose at least 1 character type!");
    return;
  }
  
  var password = generatePassword(length,special,numbers,lowerCase,upperCase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
