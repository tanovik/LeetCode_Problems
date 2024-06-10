function isIsomorphic(s: string, t: string): boolean {
     if(s === t)return true;

    const sMap: Map<string, string> = new Map();
    const tMap: Map<string, string> = new Map();

    for(let i = 0; i < s.length; i++){
       if(
            sMap.has(s[i]) && sMap.get(s[i]) !== t[i] ||
            tMap.has(t[i]) && tMap.get(t[i]) !== s[i]
        ) return false;

        sMap.set(s[i], t[i]);
        tMap.set(t[i], s[i]);
    }
    return true;
};