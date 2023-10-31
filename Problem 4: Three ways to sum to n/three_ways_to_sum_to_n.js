function firstWaySumToN(n) {
  // This function will have time complexity: O(1). 
  // This function will have space complexity: O(1).
  return n > 0 ? n*(n+1)/2 : -n*(n-1)/2;
}

function secondWaySumToN(n) {
  // This function will have time complexity: O(N).
  // This function will have space complexity: O(1).
  if (n >= 0) {
    let sum = 0;
    for (let i = 0; i <= n ; i++) {
      sum += i;
    }
    return sum;
  }    
  return -firstWaySumToN(-n);
}

function thirdWaySumToN(n) {
  // This function will have time complexity: O(N).
  // This function will have space complexity: O(N).
  if (n == 0) {
    return 0;
  }
  if (n > 0) {
    return n + thirdWaySumToN(n - 1);
  }
  return -thirdWaySumToN(-n);
}
