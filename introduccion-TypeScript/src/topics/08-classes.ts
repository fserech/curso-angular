export class Person {
    public name: string;
    public address: string;

    //inicializando la variables 

    constructor() {
        this.name = 'Fernando';
        this.address = 'Calle Falsa 123';
    }

}

    const ironman = new Person();

    console.log(ironman);