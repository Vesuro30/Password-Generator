// This is my take on a random password generator.  
//
// Below we will initialize arrays which we will use for picking the random characters from
// We are also initializing the numChar and numCharValue to account for the slider
// we are using that allows users to select the length of their password


var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~"];
var numChar = document.getElementById("numChar");
var numCharValue = document.getElementById("numCharValue");

//add event listener to slider and display value
numChar.addEventListener("input", function(){
  numCharValue.innerHTML = numChar.value;
})

// Assignment Code - this selects the generate button, or more specifically which element has the generate ID
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// The function below generatePassword is used to verify that we have all types selected by the user
// useLower, useUpper, useNum and useSpec are what specifically we are using to verify if the user 
// has checked the check boxes that allow the user to select what types of characters they would like the
// password generator to use.  Then we are using haveLower, haveUpper, haveNum and haveSpec to verify if we have
// the selected type of character.  These are all initialized as false to begin with and we turn them to 
// true once the selected character type has been added.  We then use the function generateRandNum to select a
// random index from the specified array.



function generatePassword(){

var useLower = document.getElementById("lowercase").checked;
var useUpper = document.getElementById("uppercase").checked;
var useNum = document.getElementById("numbers").checked;
var useSpec = document.getElementById("special").checked;
var pw = "";
var haveLower = false, haveUpper = false, haveNum = false, haveSpec = false;

function generateRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


  if (!useLower && !useUpper && !useNum && !useSpec) {
    document.getElementById("errMsg").style.display="block";
    setTimeout(function(){
      document.getElementById("errMsg").style.display="none";
      }, 3500);
  }else{
    while (pw.length < numChar.value) {
      if(useLower && !haveLower){
        pw += lettersLower[generateRandNum(0, 25)];
        haveLower = true;
      }
      if(useUpper && !haveUpper){
        pw += lettersUppercase[generateRandNum(0, 25)];
       haveUpper = true;
      }
      if(useNum && !haveNum){
        pw += numbers[generateRandNum(0, 9)];
        haveNum = true;
      }
      if(useSpec && !haveSpec){
        pw += special[generateRandNum(0, 31)];
        haveSpec = true;
      }



      // Can also use ASCII code to generate the characters with the exception of the special chars as the codes for special chars have gaps
      // This method also functions and may be less resource intensive?  I ultimately decided to go with the randomly generated index of the 
      // arrays initialized at the top.

      // if(useLower && !haveLower){
      //   pw += String.fromCharCode(generateRandNum(97, 122));
      //   haveLower = true;
      // }
      // if(useUpper && !haveUpper){
      //   pw += String.fromCharCode(generateRandNum(65, 90));
      //   haveUpper = true;
      // }
      // if(useNum && !haveNum){
      //   pw =+ String.fromCharCode(generateRandNum(48, 57));
      //   haveNum = true;
      // }

      // if(useSpec && !haveSpec){
      //   pw += special[generateRandNum(0, 31)];
      //   haveSpec = true;
      // }

      // Played with switch control structure.

      // switch(true){
        //   case charType == 0 && useLower :
        //     pw += lettersLower[generateRandNum(0, 25)];      
        //   break;       
        //   case charType == 1 && useUpper :
        //     pw += lettersUppercase[generateRandNum(0, 25)]
        //   break;
        // }
        
        
// Here we use generateRandNum again to randomly select which type of character (assuming the user selected more than one type)
// is assigned to the password (pw).  We verify that the user has selected that type of character through the use of the 
// useLower, useUpper, useNum and useSpec in our logic below.  So if the user has selected that type of character AND the 
// current length of pw is less than the selected length (numChar.value) we add another randomly generated type and character.
// Finally we return the pw to the user

        var charType = generateRandNum(0, 3);

      if(pw.length < numChar.value){
      if(charType == 0 && useLower)
        {pw += lettersLower[generateRandNum(0, 25)];}
      else if(charType == 1 && useUpper)
        {pw += lettersUppercase[generateRandNum(0, 25)];}
      else if(charType == 2 && useNum)
        {pw += numbers[generateRandNum(0, 9)];}
      else if(charType == 3 && useSpec)
        {pw += special[generateRandNum(0, 31)];}
      }
    }
  }
  return pw; 
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

