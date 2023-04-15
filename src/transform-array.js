const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let newArray = [];
  let check = true;
  for (let i = 0; i < arr.length; i++) {
    if (!check) {
      if ((arr[i + 1] === '--double-prev') || (arr[i + 1] === '--discard-prev')) {
        check = false;
      } else {
        check = true;
      }
      continue;
    }
    switch (arr[i]) {
      case '--discard-next':
        check = false;
      break;

      case '--discard-prev':
        if (i > 0) {
          newArray.pop();
        }
      break;

      case '--double-next':
        if (i < arr.length - 1) {
          newArray.push(arr[i + 1]);
        }
      break;

      case '--double-prev':
        if (i > 0) {
          newArray.push(arr[i - 1]);
        }
      break;

      default:
        newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = {
  transform
};
