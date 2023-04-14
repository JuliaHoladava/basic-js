const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let nameTeam = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let nameMember = members[i].trim().toUpperCase();
      nameTeam += nameMember.slice(0, 1);
    }
  }
  nameTeam = nameTeam.split('').sort().join('');
  if (nameTeam.length > 0) {
    return nameTeam;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
