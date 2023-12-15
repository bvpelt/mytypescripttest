let employee1: {
    id: number,
    name: string,
    faxnr?: string                 // Optional field of object employee
} = { id: 1, name: 'Karel' };

console.log('employee: ' + JSON.stringify(employee1));

employee1.faxnr = '06-44339494';
console.log('employee: ' + JSON.stringify(employee1));

employee1.id = 6;
console.log('employee: ' + JSON.stringify(employee1));

let manager: {
    readonly id: number,
    name: string
} = { id: 1, name: 'Fons Jansen'};
console.log('manager: ' + JSON.stringify(manager));

// manager.id = 5; does not compile

let animal: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = {id: 1, name: 'Cat', retire: (date: Date) => {
    console.log('date: ', date.toISOString());
}}

console.log('animal: ' + JSON.stringify(animal));
animal.retire(new Date());