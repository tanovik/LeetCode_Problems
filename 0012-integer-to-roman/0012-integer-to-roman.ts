const VALUES = [
['M',	1000],
['CM',	900],
['D',	500],
['CD',	400],
['C',	100],
['XC',	90],
['L',	50],
['XL',	40],
['X',	10],
['IX',	9],
['V',	5],
['IV',	4],
['I',	1],
] as Array<[string, number]>


function intToRoman(num: number): string {
    let roman = [];
    for(var [char, max] of VALUES) {
        while(num >= max){
            roman.push(char);
            num -= max;
        }
        if(num === 0) break;
    }
    return roman.join('');
};