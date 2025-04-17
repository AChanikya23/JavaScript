function findLongestPalindrome(str) {
  if (!str || str.length === 0) return "";
  let start = 0, maxLength = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1; 
  }

  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);
    let len = Math.max(len1, len2);
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return str.substring(start, start + maxLength);
}

console.log(findLongestPalindrome("madam"));
console.log(findLongestPalindrome("racecar")); 