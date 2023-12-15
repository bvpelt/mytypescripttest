
function greet(name: string): void {
    console.log(name.toUpperCase());
}

// greet(null); by default not valid

function greetnull(name: string | null): void {
    if (name)
        console.log('greetnull: ', name.toUpperCase());
    else
        console.log('greetnull: ', 'Hola!');
}

greetnull(null);

function greetnullundefined(name: string | null | undefined): void {
    if (name)
        console.log('greetnullundefined: ', name.toUpperCase());
    else
        console.log('greetnullundefined: ', 'Hola!');
}

greetnullundefined(undefined);