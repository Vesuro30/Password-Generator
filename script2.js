let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = [" ", '"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~"];

let randomLower = letters[generateRandNum(0, 25)];
console.log(randomLower);

let randomUpper = lettersUppercase[generateRandNum(0, 25)];
console.log(randomUpper);

let randomNum = numbers[generateRandNum(0, 9)];
console.log(randomNum);

let randomSpecial = special[generateRandNum(0, 32)];
console.log(randomSpecial);






function generateRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



