function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'Nueva propiedad';
        hello = 'Hola mundo';
    };
}

@classDecorator

export class SuperClass {
    public myProperty: string = 'ABC123';

    print() {
        console.log('Hola mundo');
    }
}

console.log (SuperClass)// imprimiendo la definicion de mi clase

const myClass = new SuperClass();

console.log(myClass); // imprimiendo la instancia de mi clase