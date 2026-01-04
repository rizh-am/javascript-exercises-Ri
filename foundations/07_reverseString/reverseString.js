const reverseString = function (word) {
  //Declared the parameter
  let reversed = ""; // Declared a new variable
  let i = word.length - 1; // Assigned the index of the final character in the string
  for (i; i >= 0; i--) {
    reversed = reversed + word[i]; // This will take the character at the index, and add it to reversed
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
