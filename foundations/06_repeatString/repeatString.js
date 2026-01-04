const repeatString = function (word, times) {
  // Added parameters word and times
  if (times < 0) return "ERROR"; // Returns ERROR if times is a negative number
  let string = ""; // Created a new variable
  for (let i = 0; i < times; i++) {
    // Initialized a for loop
    string += word; // This equates to string = string + word
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
