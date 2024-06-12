function isAnagram(s: string, t: string): boolean {
     if(s.length !== t.length) return false;

    let map = new Map<string, number>();

    // Adding value in map
    for(let char of s) map.set(char, (map.get(char) || 0) + 1)

    // loop over t to find out is t real anagram
    for(let char of t) {
        let valueExist = map.get(char);
        if(!valueExist) return false;
        else {
            map.set(char, valueExist - 1);
        }
    }

    return true;
};