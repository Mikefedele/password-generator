//  Assignment Code
var generateBtn = document.querySelector("#generate");

//  Write password to the #password input
 function writePassword() {
 var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const up = document.querySelector('up');
// let uppers = false;
function generatePassword() {
    var finalpassword = "hello";

    var wordlength = prompt ("Password length. Please choose between 8 - 128 characters.");
    console.log(wordlength)
    
    
    
    if (wordlength >= 8 && wordlength <= 128) {
        console.log(wordlength)
    } else {
        alert("Please choose a length between 8 -128 characters.");
        return; 
    //     var wordlength = prompt ("Password length. Please choose between 8 - 128 characters.");
    // console.log(choicelength)
    }
    
    var uppers = confirm("Do you want Uppercase?")
    var lowers= confirm("Do you want lowercase?")
    var numbers = confirm("Do you want ?numbers")
    var specials = confirm("Do you want special chars?")

console.log (uppers,lowers,numbers,specials)




  
     if (confirm("Press a button")== true)  {
        
    } else {
        
    }


    return finalpassword;
}

var lowercases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var uppercases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specials = ["!","#","$","%","&","*","+","-",":","@","?"]
// console.log(uppercase)
// console.log(lowercase)
// console.log(number)
var numb = false;
var length = (10);
var special = false;




// Input msg. Choose number of characters btwn 8-128 Input
//  #> 8, <= 128 if false prompt, 
// if true confirm upper, confirm lower, confirm number, confirm spcial
// if all false prompt "must choose 1", restart sequence
// if any true, concat all trues to single string
// take at least 1 from each true
// times (*) wordlength 
// 




// if (shelter.dogs.includes(chosenPet)) {
//     dogMessage();
//   } else if (shelter.cats.includes(chosenPet)) {
//     catMessage();
//   } else {
//     console.log("It looks like the pet is not available.");  

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

