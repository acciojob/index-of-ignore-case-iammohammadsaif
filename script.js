function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase to ignore case sensitivity
  let lowerStr = str.toLowerCase();
  let lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the first occurrence of the substring
  return lowerStr.indexOf(lowerSubStr);
}

// Test cases
console.log(indexOfIgnoreCase("Hello World", "world"));  // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1
