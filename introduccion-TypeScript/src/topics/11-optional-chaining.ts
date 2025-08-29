export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
   };

const passenger2: Passenger = {
    name: 'María',
    children: ['Pedro', 'Juan']
};

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length ?? 0;
    console.log(`Tiene ${howManyChildren} hijos: ${passenger.children?.join(', ') ?? 'No tiene hijos'}`);
};

printChildren(passenger1);
printChildren(passenger2);