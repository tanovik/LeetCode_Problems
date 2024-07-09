function findJudge(n: number, trust: number[][]): number {
   let people: Map<number, number> = new Map();
    for(let i = 1; i <= n; i++){
        people.set(i, 0);
    }
    
    trust.forEach(pair => {
        let b: number = people.get(pair[1]);
        people.set(pair[1], b + 1);

        let a: number = people.get(pair[0]);
        people.set(pair[0], a - 1);
    });
    
    for(let pair of people.entries()){
        if(pair[1] === n - 1){
            return pair[0];
        }
    }

    return -1;
};

