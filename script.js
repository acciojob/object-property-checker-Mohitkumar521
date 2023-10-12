function hasKey(key) {
  // Check if the key exists in the global object sampleObject
  return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Examples
console.log(hasKey("red"));    // true
console.log(hasKey("blue"));   // false
console.log(hasKey("white"));  // true

