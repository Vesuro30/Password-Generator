var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~"];
var numChar = document.getElementById("numChar");
var numCharValue = document.getElementById("numCharValue");

//add event listener to slider and display value
numChar.addEventListener("input", function(){
  numCharValue.innerHTML = numChar.value;
});

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// function randomLowerLetter(){
// var randomLower = letters[Math.floor(Math.random()*letters.length)];
// };


function generatePassword(){

var useLower = document.getElementById("lowercase").checked;
var useUpper = document.getElementById("uppercase").checked;
var useNum = document.getElementById("numbers").checked;
var useSpec = document.getElementById("special").checked;
var pw = "";
var i;
var haveLower = false, haveUpper = false, haveNum = false, haveSpec = false;



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
      };

      
      // switch(true){
        //   case charType == 0 && useLower :
        //     pw += lettersLower[generateRandNum(0, 25)];
        
        //   break;
        
        //   case charType == 1 && useUpper :
        //     pw += lettersUppercase[generateRandNum(0, 25)];
        
        
        //   break;
        
        // }
        
        
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
      };
      
      
      
       console.log(pw.length)
    };
  };
  return pw;  
};

function generateRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

