const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains : [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chains.push('( )');
    } else {
      this.chains.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position >= this.chains.length) {
      this.chains = [];
      throw new Error ("You can't remove incorrect link!");
    } else {
      this.chains.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chains.reverse();
    return this;
  },

  finishChain() {
    const result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
