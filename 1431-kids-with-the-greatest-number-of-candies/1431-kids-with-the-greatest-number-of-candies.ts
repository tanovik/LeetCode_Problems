function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    return candies.map((candy, i) => {
        return candies.every((childCandies, j) => {
            if (i === j) return true;

            return candy + extraCandies >= childCandies;
        })
    });
};