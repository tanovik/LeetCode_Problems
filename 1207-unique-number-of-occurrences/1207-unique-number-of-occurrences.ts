function uniqueOccurrences(arr: number[]): boolean {
  let occNumbers = [];
  let occurences = 1;
  let numberArr = arr.sort((a, b) => a - b);
  for (let i = 0; i <= numberArr.length - 1; i++) {
    if (numberArr[i] === numberArr[i + 1]) {
      occurences++;
    } else {
      if (occNumbers.includes(occurences)) return false;
      occNumbers.push(occurences);
      occurences = 1;
    }
  }
  return true;
};