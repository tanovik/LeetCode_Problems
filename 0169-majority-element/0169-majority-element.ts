function majorityElement(nums: number[]): number {
    nums.sort((i, j) => i - j)
    const midIndx = Math.floor(nums.length / 2)
    return nums[midIndx]
};