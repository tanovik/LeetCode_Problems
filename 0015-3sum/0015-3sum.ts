function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a - b); // Ascending order

    const result: [number, number, number][] = [];

    for (const i of nums.keys()) {

        // Skip duplicate i values. This speeds things up a lot.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Set two pointers between the rest of the nums and the end
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) right--; // Sum too large? Decrease it.
            else if (sum < 0) left++; // Sum too small? Increase it.
            else {
                // Skip duplicate left and right values
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 

                result.push([nums[i],nums[left],nums[right]]);
                left++; // Increment left to keep looking for more combinations.
            }
        }
    }
    
    return result;
};