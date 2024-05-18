function lengthOfLastWord(s: string): number {
    let string = s.trim();
    return string.length - 1 - string.lastIndexOf(" ");
};