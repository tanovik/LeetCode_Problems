function singleNumber(nums: number[]): number {
    const map = new Map();

    nums.forEach((i)=> {
        const freq = (map.get(i) ?? 0) + 1;
        map.set(i, freq);
    });

    for(let [key, val] of map) {
        if(val === 1) return key
    }
};