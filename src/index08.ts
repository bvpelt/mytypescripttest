
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log('retire date: ', date.toISOString());
    }
}

console.log('employee: ' + JSON.stringify(employee));
// employee.id = 5; compiler error
employee.name = 'Karel';
console.log('employee: ' + JSON.stringify(employee));
console.log('employee retire')
employee.retire(new Date);