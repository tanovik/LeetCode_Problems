function findMaxAverage(nums: number[], k: number): number {
   let i = 0;
    let sum = 0;
    let maxSum = 0;
    while (i < nums.length){
      sum += nums[i];

      // initial maxSum
      if (i < k) {
        maxSum = sum;
      }else {
        // move window by removing the previous num and update max sum
        sum -= nums[i - k];
        maxSum = Math.max(sum, maxSum);
      }
      
      i++;
    }
    return maxSum/k;
};