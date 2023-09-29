// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const passwordOptions = {

  num: "1234567890",
  specialChar: "!@#$%^&*()_-+=/;:'`~<,>.?\|{[}]",
  lowerChase: "abcdefghijklmnopqrstuvwxyz",
  upperChase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


};


let generatePassword = function() {

   
   let passInfo = "";

   
   let characterAmount = window.prompt("What Are Your Desired Number Of Characters ?");
 
   
   if (characterAmount >= 8 && characterAmount < 129) {
 
     
     let getInteger = window.confirm("Would You Like To Include Any Numbers ?");
 
     
     if (getInteger) {
       
       passInfo = passInfo + passwordOptions.num;
     };
 
     
     let getSpecialCharacters = window.confirm("Would You Like To Include Special characters ?");
 
     
     if (getSpecialCharacters) {
       
       passInfo = passInfo + passwordOptions.specialChar;
     };
 
     
     let getLowerCase = window.confirm("Would You Like To Include Lowercase characters ?");
 
     
     if (getLowerCase) {
      
       passInfo = passInfo + passwordOptions.lowerCase;
     };
 
     
     let getUpperCase = window.confirm("Would you like to include UPPERCASE characters?");
 
     
     if (getUpperCase) {
        
       passInfo = passInfo + passwordOptions.upperCase;
     };
 
     
     if (getInteger !=true && getSpecialCharacters !=true && getLowerCase !=true && getUpperCase !=true) {
      
       window.alert("You need to select at least one option, please try again!");
       
       return securePassword();
     };
 
    
     let randomPassword = "";
 
     
     for (let i = 0; i < characterAmount; i++) {
       

       randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
     };
 
     
     return randomPassword;
   }
  
   else {
     
     window.alert("You need to provide a valid length!");

     let generateBtn = document.querySelector("#generate");
     
   }
 };




 document.getElementById('generate').addEventListener ("click", function(){
  alert(securePassword());
  
  
  })
  



generateBtn.addEventListener("click", writePassword);

