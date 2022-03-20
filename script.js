//  Assignment Code

//I think this HW was way too many topics used in to large of a solve in a 2 day turnaround.
//It was hard to know if I was progressing on pieces of the code. A few smaller
//functions covering all that we learned would be better with something
//larger once got got feedback from this.

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "*", "+", "-", ":", "@", "?"];

var generateBtn = document.querySelector("#generate");

//the function runs on button click
//  Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// password length, parse to get just integers
function generatePassword() {
  var wordlength = parseInt(prompt(
    "Password length. Please choose between 8 - 128 characters."
  ));
  console.log(wordlength);

//if word length is invalid
  if (wordlength >= 8 && wordlength <= 128) {
    console.log(wordlength);
  } else {
    alert("Please choose a length between 8 -128 characters.");
    return;
  }

  var uppers = confirm("Do you want Uppercase?");

  var lowers = confirm("Do you want lowercase?");
  var numbers = confirm("Do you want numbers?");
  var specials = confirm("Do you want special characters?");
// console.log(uppers,lowers,numbers,specials)

//concat array. do it each time to total array to not replace prev
var totalarray =[]
if (uppers === true) {
  totalarray=totalarray.concat(uppercase)
  
}
if (lowers) {
  totalarray=totalarray.concat(lowercase)
  
}
if (numbers) {
  totalarray=totalarray.concat(number)
  
}
if (specials) {
  totalarray=totalarray.concat(special)
  
}

if (totalarray.length===0){
  alert("must select at least one")
}
//
var passResults = [];
for (let index = 0; index < wordlength; index++) {
  const I = Math.floor(Math.random()*totalarray.length);
  console.log(I)
  var passdigit = totalarray[I]
  console.log(passdigit)
  passResults.push(passdigit)
}
console.log(passResults)
return passResults.join("")



  // let tempPass = tempPass.tostring();
  // console.log (tempPass)

  // now that new string tempPass can be used to get the multiplier
  // from the wordlengh

  // I want to iterate slicing my string, TempPass, wordlength times

  // the result of

  

  // Acceptance Criteria
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  var finalpassword = "";

  return finalpassword;
}
