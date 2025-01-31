function repeatedSumOfDigits(n) {
    while (n >= 10) {
      n = Array.from(String(n), Number).reduce((a, b) => a + b, 0);
    }
    return n;
  }
  
  
  console.log(repeatedSumOfDigits(456));  
  
  