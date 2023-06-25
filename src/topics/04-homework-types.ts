// Interfaz del super heroe
interface SuperHero {
    name : string;
    age : number;
    address : Address;
    showAddress : () => string;
}

// Interfaz del objeto interno
// Cambio de todos los nombres de las variables desde la principal 
// ctrl + f2 
interface Address {
    street:string;
    country:string;
    city:string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log( address );

export {};