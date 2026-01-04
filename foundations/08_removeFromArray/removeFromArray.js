const removeFromArray = function (array, ...args) {
  // used the rest operator "..." to call all the arguements
  let newArray = []; // Declared a new empty array
  array.forEach((item) => {
    // Used the forEach() method to cycle through all the items in the array
    if (!args.includes(item)) newArray.push(item);
    // the basic logic is: if not arguements (included in args != current item) matches the current item, push it into newArray
  });
  return newArray;
};

// I wrote thisfirst, but it does not work with multiple remove arguements
//
// const removeFromArray = function (array, remove) {
//   let len = array.length;
//   let newArray = [];
//   for (let i = 0; i < len; i++) {
//     if (array[i] != remove) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
