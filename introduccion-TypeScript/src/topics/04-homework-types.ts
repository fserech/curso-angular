/**
====EJERCICIO DE TYPESCRIPT
 */


interface SuperHeroe {
  name: string;
  age: number;
  address: Address;
  ShowAddress: () => string;
}   

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHeroe = {
    name: 'Superman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'Metropolis',
        city: 'USA'
    },
    ShowAddress() {
        return this.name + ', ' + this.address.street + ', ' + this.address.country + ', ' + this.address.city;
    }
}

const address = superHeroe.ShowAddress();
console.log(address);

export {};