// Literal (exact, specific value)
let quantity1: 50 | 100 = 50;
console.log('quantity1: ' + JSON.stringify(quantity1));

type Quantity = 50 | 100;
// let quantity2: Quantity = 1;  compiler error 
let quantity3: Quantity = 100;
console.log('quantity3: ' + JSON.stringify(quantity3));

type Metric = 'cm' | 'inch';
let metric: Metric =  'cm';
console.log('metric: ' + JSON.stringify(metric));