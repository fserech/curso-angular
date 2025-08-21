export class Person {
    public name: string;
    public address: string;
    //inicializando la variables 
    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

}
//ESTENDER PROPIEDADES DE PERSON
/*export class Hero extends Person {
    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor(
        alterEgo: string,
        age: number,
        realName: string,
    ) {
        super(realName, ''); // You may want to adjust the address value as needed
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}
*/
export class Hero  {
   public person: Person;

    constructor(
        alterEgo: string,
        age: number,
        realName: string,
        person: Person,
    ) {
        this.person = person;
        //this.person = new Person(realName, ''); 
    }
}
    const person = new Person('Tony Stark', 'Malibu, CA');
    const ironman = new Hero('Ironman', 45, 'Tony', person); // los () significa que esta invocando una clase

    console.log(ironman); // los () significa que esta invocando una clase

 