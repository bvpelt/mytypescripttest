// key value pairs

let user: [number, string] = [1, 'Moscouw'];
user.push(2);
user.push('Drie');

console.log('user length: ' + user.length);
user.forEach(n => {
    console.log('User: ' + n);
});

console.log('user: ' + user);