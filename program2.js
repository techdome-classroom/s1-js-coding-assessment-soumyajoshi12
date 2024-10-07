const decodeTheRing = function (s, p) {
  function isMatch(mIdx, pIdx, memo) {
    if (mIdx === message.length && pIdx === pattern.length) return true;
    
    if (pIdx === pattern.length) return false;

    if (memo[mIdx][pIdx] !== undefined) return memo[mIdx][pIdx];

    let match = false;

    if (pattern[pIdx] === '*') {
      match = isMatch(mIdx, pIdx + 1, memo) || (mIdx < message.length && isMatch(mIdx + 1, pIdx, memo));
    } 
    // Handle '?' in the pattern
    else if (pattern[pIdx] === '?') {
      // '?' must match exactly one character in the message
      match = mIdx < message.length && isMatch(mIdx + 1, pIdx + 1, memo);
    } 
    // Handle regular characters
    else {
      // Current character in message and pattern must match
      match = mIdx < message.length && message[mIdx] === pattern[pIdx] && isMatch(mIdx + 1, pIdx + 1, memo);
    }

    // Store the result in memoization table and return it
    memo[mIdx][pIdx] = match;
    return match;
  }

  // Initialize memoization table with undefined values
  const memo = Array(message.length + 1).fill(null).map(() => Array(pattern.length + 1));
  
  // Start matching from the first characters of both message and pattern
  return isMatch(0, 0, memo);
}
  
  module.exports = decodeTheRing;