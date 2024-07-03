function longestOnes(nums: number[], k: number): number {
    let start = 0, end = 0, zeros = 0;

  while (end < nums.length) {
      if (nums[end] === 0) {
          zeros++;
      }
      end++;

      if (zeros > k) {
          if (nums[start] === 0) {
              zeros--;
          }
          start++;
      }
  }

  return end - start;
};