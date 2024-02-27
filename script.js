function isPalindrome(str) {
    str = str.replaceAll(" ", "").toLowerCase();
    let inverso = "";
    for (let i = str.length; i > 0; i--) {
      inverso = inverso + str[i - 1];
    }
    if (inverso === str) {
      return true;
    }
    return false;
  }
  
  function arrayMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return [min, max];
  }