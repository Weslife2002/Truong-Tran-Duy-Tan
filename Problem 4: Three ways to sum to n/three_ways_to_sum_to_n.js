// I assume that those functions will calculate the sum from n to 0 when n is negative.
function firstWaySumToN(n) {
  // This function will have complexity time: O(1). 
  // This function will have efficiency: O(1).
  return n > 0 ? n*(n+1)/2 : -n*(n-1)/2;
}

function secondWaySumToN(n) {
  // This function will have complexity time: O(N) as we need n iterations.
  // This function will have efficiency: O(1) as we only need memory space.
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
  // This function will have complexity time: O(N) as we need n recursions.
  /* This function will have efficiency: O(N) as the some memory space of the stack will be occupied for each recursion. 
  If n is big enough this could leads to stack overflow. **/
  if (n == 0) {
    return 0;
  }
  if (n > 0) {
    return n + thirdWaySumToN(n - 1);
  }
  return -thirdWaySumToN(-n);
}
