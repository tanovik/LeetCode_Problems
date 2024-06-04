/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let len = nums.length
  while(len > 0) {
    if (nums[len-1] === 0) {
      // remove element by index
      const sp: number[] = nums.splice(len-1, 1)
      // and push this element to end
      nums.push(...sp)
    }
    len--
  }
};