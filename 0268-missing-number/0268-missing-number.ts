function missingNumber(nums: number[]): number {
     const top = nums.length
    const sum = nums.reduce((acc, curr) => acc + curr, 0)
    const theoretical = ((top * top) + top) / 2
    return theoretical - sum;
};