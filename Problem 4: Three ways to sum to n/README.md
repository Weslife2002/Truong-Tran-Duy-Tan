# Three ways to sum to N

I assume that those functions will calculate the sum from n to 0 when n is negative.

## FirstWayToSumToN

For the first way to sum to n, I use math to solve the problem.
This function will have time complexity: O(1).
This function will have space complexity: O(1).
Therefore, this is the most efficient method in three methods.

## SecondWayToSumToN

For the second way to sum to n, I use iteration to solve the problem.
This function will have complexity time: O(N) as we need n iterations.
This function will have efficiency: O(1) as we only need memory space for variable sum and variable i.

## ThirdWayToSumToN

For the third way to sum to n, I use reversion to solve the problem.
This function will have time complexity: O(N).
This function will have space complexity: O(N) as the some memory space of the stack will be occupied for each recursion.
In fact, if n is big enough this could leads to stack overflow as the main memory space will run out.
Therefore, this is the worst efficient method in three methods.
