function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0;
    let low = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    for (let i=0; i<nums.length; i++) {
        sum+=nums[i];
        while (low<=i && sum>=target) {
            const currentWindowLength = i - low + 1;
            minLength = Math.min(minLength, currentWindowLength)
            sum-=nums[low];
            low++;
        }
    }

    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};