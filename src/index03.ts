let numbers = [1,2,3];            // each element of the array can be of a different type
let numbers1 = [1,2,'a'];         // each element of the array can be of a different type
let numbers2: number[] = [1,2,3]; // each element must be of type number
let numbers3 = [];                // array of any -- bad practice
let numbers4: number[] = [];      // only numbers are allowed in the array
numbers4[0] = 1;

numbers.forEach(n => {
    console.log('n: '+ n.toString());
});