
function myPow(a: number, b: number): number {
    let k = a;
    if (b == 0) {
        return 1;
    }
    for (let i = 1; i < b; i++) {
        k = k * a;
    };
    return k;
};


console.log(myPow(2, 10));