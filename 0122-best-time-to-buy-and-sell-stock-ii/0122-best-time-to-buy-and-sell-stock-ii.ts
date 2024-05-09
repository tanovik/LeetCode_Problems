function maxProfit(prices: number[]): number {
    let l = 0,
    r = 1,
    max = 0

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l]
      max += profit
      l++
    } else l = r
    r++
  }

  return max
};