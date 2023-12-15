function kgToLbs(weight: number | string): number {
    const conversionFactor: number = 2.2;

    // Narrowing of type
    if (typeof weight === 'number') {
        return weight * conversionFactor;
    } else {
        return parseInt(weight) * conversionFactor;
    }
}

console.log('kgToLbs - number: ' + kgToLbs(10));
console.log('kgToLbs - string: ', kgToLbs('10kg'));
