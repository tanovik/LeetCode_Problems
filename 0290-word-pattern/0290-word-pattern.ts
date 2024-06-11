function wordPattern(pattern: string, s: string): boolean {
        const wordsMap = new Map<string, string>();
    const usedLetters = new Map<string, boolean>();
    const words = s.split(" ");

    if (words.length !== pattern.length) {
        return false;
    }

    return !words.find((word, index) => {
        const wordInMap = wordsMap.get(word);
        const letter = pattern.charAt(index);

        if (
            (!wordInMap && usedLetters.get(letter)) ||
            (wordInMap && wordInMap !== letter)
        ) {
            return true;
        }

        usedLetters.set(letter, true);
        wordsMap.set(word, letter);

        return false;
    });

};