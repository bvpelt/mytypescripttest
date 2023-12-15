type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

// Optional property access operator
let customer = getCustomer(0);
console.log('birthday: ', customer?.birthday);

// Optional element access operator
// customers?.[0]

let customer1 = getCustomer(1);
console.log('birthday year: ', customer?.birthday?.getFullYear);

// Optional call
let log: any = null;
log?.('a');                // only executed if log exist