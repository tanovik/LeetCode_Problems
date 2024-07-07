function numWaterBottles(numBottles: number, numExchange: number): number {
    let drinkBottles = numBottles
  let fullBottles = numBottles
  let emptyBottles = numBottles

  while(emptyBottles >= numExchange) { 
    const mod = emptyBottles % numExchange
    fullBottles = Math.floor(emptyBottles / numExchange)
    drinkBottles += fullBottles
    emptyBottles = fullBottles + mod
  }
  return drinkBottles
};