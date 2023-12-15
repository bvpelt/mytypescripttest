function caculateMin(a: number, b: number) {          // infered return type is void
    let c = (a < b) ? a : b;
    return c;
}

function caculateSum(a: number, b: number): number {  // specified return type is number    
    return (a + b);
}

function caculateMax(a: number, b: number) {          // returns number | undefined 
    
    if (a > b) 
        return a;
    return b;
}

function caculateMax3(a: number, b: number, c: number = 10) {  // specify default value
    
    if (a > b) 
        return caculateMax(a,c);
    return caculateMax(b,c);
}

let minNumber: number = 1;
let maxNumber: number = 7;

let min = caculateMin(minNumber, maxNumber);
console.log('min: ', min);
let sum = caculateSum(minNumber, maxNumber);
console.log('sum: ', sum);
let max = caculateMax(minNumber, maxNumber);
console.log('max: ', max);

max = caculateMax3(minNumber, maxNumber);
console.log('max3 2 arguments: ', max);
max = caculateMax3(minNumber, maxNumber, 100);
console.log('max3 3 arguments: ', max);