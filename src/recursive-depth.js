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
    console.log(arr.reduce((acc, el) => Array.isArray(el) ? acc = acc + calculateDepth(el) : acc, arr.length));
    return arr.reduce((acc, el) => Array.isArray(el) ? acc = acc + calculateDepth(el) : acc, arr.length);
  }
}

module.exports = {
  DepthCalculator
};
