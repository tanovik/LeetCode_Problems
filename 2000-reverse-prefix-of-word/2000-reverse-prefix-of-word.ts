function reversePrefix(word: string, ch: string): string {
    let arr = word.split("");
  let indx = arr.findIndex((el) => el === ch);
  if (!indx || indx < 0) return word;
  return (
    arr
      .slice(0, indx + 1)
      .reverse()
      .join("") + arr.slice(indx + 1, arr.length).join("")
  );
};