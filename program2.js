const decodeTheRing = function (s, p) {
  function isMatch(mIdx, pIdx, memo) {
    // If both message and pattern are fully consumed, it's a match
    if (mIdx === message.length && pIdx === pattern.length) return true;
    
    // If the pattern is consumed but message isn't, it's not a match
    if (pIdx === pattern.length) return false;

    // If we have computed this state before, return its value
    if (memo[mIdx][pIdx] !== undefined) return memo[mIdx][pIdx];

    let match = false;

    // Handle '*' in the pattern
    if (pattern[pIdx] === '*') {
      // '*' can either match zero or more characters
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