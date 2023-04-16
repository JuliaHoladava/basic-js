const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    const getDepth = (arr, depth) => {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          // depth = depth + 1;
          getDepth(arr[i], depth + 1);
        }
      }
      maxDepth = Math.max(maxDepth, depth);
    }
    getDepth(arr, 1);
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
