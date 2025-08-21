export class Person {
    public name: string;
    public address: string;
    //inicializando la variables 
    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

}

    const ironman = new Person('iOMAN', 'Calle Falsa 123'); // los () significa que esta invocando una clase

    console.log(ironman);