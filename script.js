// Assignment code here
var arrayNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var arrayLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrayUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arraySpecials = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~",",","<",".",">","/","?",";",":","'","|","[","{","]","}"];

let length;
let special;
let numbers;
let lowerCase;
let upperCase;


function generatePassword(length, special, numbers, lowerCase, upperCase){
  let characterArray = new Array;
  let passwordArray = new Array;
  if(special){
    characterArray = characterArray.concat(arraySpecials);
}
  if(numbers){
    characterArray = characterArray.concat(arrayNumbers);
  }
  if(lowerCase){
    characterArray = characterArray.concat(arrayLowerCase);
  }
  if(upperCase){
    characterArray = characterArray.concat(arrayUpperCase);
  }

  for(let i = 0; i < length; i++){
    passwordArray.push(characterArray[Math.floor(Math.random() * length)])
  }

  return passwordArray.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(60,false,false,true,false);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
