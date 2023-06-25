// Encadenamiento opcional

export interface Passenger {
    name : string;
    children? : string[];
}

const passenger1 : Passenger = {
    name: 'Daniela'
}

const passenger2 : Passenger = {
    name: 'Darwin',
    children : ['Natalia','Elizabeth']
}

// Optional Chaining -> Cuando se refiere a un valor especifico

const printChildren = (passenger : Passenger) => {
   // Condicional que solo se imprime en caso de que tenga hijos
   // De lo contrario si es indefinida devolvera un 0
    const howManyChildrens = passenger.children?.length  || 0;
    console.log(passenger.name ,  howManyChildrens);
}


printChildren(passenger1);
printChildren(passenger2);