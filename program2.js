const decodeTheRing = function (message, pattern) {
  function isMatch(mIdx, pIdx, memo) {
    if (mIdx === message.length && pIdx === pattern.length) return true;
    
    if (pIdx === pattern.length) return false;

    if (memo[mIdx][pIdx] !== undefined) return memo[mIdx][pIdx];

    let match = false;

    if (pattern[pIdx] === '*') {
      match = isMatch(mIdx, pIdx + 1, memo) || (mIdx < message.length && isMatch(mIdx + 1, pIdx, memo));
    } 
    else if (pattern[pIdx] === '?') {
      match = mIdx < message.length && isMatch(mIdx + 1, pIdx + 1, memo);
    } 
    else {
      match = mIdx < message.length && message[mIdx] === pattern[pIdx] && isMatch(mIdx + 1, pIdx + 1, memo);
    }
    memo[mIdx][pIdx] = match;
    return match;
  }
  const memo = Array(message.length + 1).fill(null).map(() => Array(pattern.length + 1));
  
  return isMatch(0, 0, memo);
}
  
  module.exports = decodeTheRing;