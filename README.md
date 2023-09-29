# the-hush-hush-secret-password-generator

## Technology Used 

| Technology Used | Resource URL | 
| ------------- |:-------------:| 
| HTML | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | 
| Git | [https://git-scm.com/](https://git-scm.com/) | 

## Description 
This project required me to create JavaScript code that would provide users with the ability to generate a randomized code, with a set of parameters that must be adhered to in order to successfully do so. 

[Visit the Deployed Site](https://armand57araujo.github.io/the-hush-hush-secret-password-generator/) 

![HushHush.png](/HushHush.png)


## Code Example 


 
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
 

The challanges I faced with this project were dealing with how many functions I would need in order to iterate through the characters for the password generator, and googling the different selectors and how to target the elements in the document. 



};


let generatePassword = function() {}

   
   let passInfo = "";


I thought I had made a major mistake in the code when I ran it during some of the final tests, because it would not generate the password in the window that read "Secure Password". But thankfully I was able to read though and realize my function was referencing the wrong variable and was able to repair it. 



## Learning Points 


I thought the Portfolio was a challenge, this was the most extensive challenge I've faced so far, which has opened my eyes to my weakness with functions, as I utilized Google for almost every aspect of understanding how to properly use functions and assign the variables properly. In one word, I can sum up this entire learning experience as painful. 


## Author Info
Armand Araujo
Age: 28
Location: Santa Barbara, CA

 
* [LinkedIn](https://www.linkedin.com/in/armand-araujo-a82ba2291/) 
* [Github](https://github.com/Armand57araujo) 


## Credits 
