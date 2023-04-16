const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }) {//{ repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {
  repeatTimes = typeof repeatTimes !== 'undefined' ?  repeatTimes : 1;
  separator = typeof separator !== 'undefined' ?  separator : '+';
  addition = typeof addition !== 'undefined' ?  addition : '';
  additionRepeatTimes = typeof additionRepeatTimes !== 'undefined' ?  additionRepeatTimes : 1;
  additionSeparator = typeof additionSeparator !== 'undefined' ?  additionSeparator : '|';

  let repeatStr = '';
  str = String(str);
  addition = String(addition);
  for (let i = 0; i < repeatTimes; i++) {
    repeatStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatStr += addition;
      if (j <additionRepeatTimes - 1) {
        repeatStr += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      repeatStr += separator;
    }
  }
  return repeatStr;
}


module.exports = {
  repeater
};
