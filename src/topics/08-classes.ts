// Es una manera de crear moldes , para crear instancias del mismo
// Public --> La propiedad se puede ver desde el mundo exterior
// Private --> Solo se puede utlizar la direccion en la clase donde se encuentra


export class Person{
    // Cada variable es una propiedad dentro de una clase
    // Cada funcion se conoce como metodo dentro de una clase
    //public name : string;
    //private address : string;


// El contructor es un metodo especial en las clases
// Es la funcion que se llama cada que se crea una nueva instancia de la clase

constructor( public name : string ,
            private address : string = 'No Address')
            {}
}

// Extender una clase -> Añadir o expandir su funcionalidad
/*export class Hero extends Person {

    // Lo que yo define en la clase de hero , va a arrastrar las propiedades de Person
    // super -> funcion especial que llama el constructor del padre
    constructor( public alterEgo : String,
                 public age : number,
                 public realName : string){
        // Propiedades de la clase padre 
        // Propiedades de ese constructor
        super(realName , 'New York');
    }
}*/

// Herencia -- Debemos priorizar composicion por herencia

export class Hero{

    // Creamos una nueva propiedad de la clase padre
     //public person : Person;

    constructor( 
        public alterEgo : String,
        public age : number,
        public realName : string,
        public person : Person,
        ){

            // Otra manera de extender la clase persona
            this.person = new Person(realName);

        }
}


// Su tipo de dato es como la clase en este caso persona
// Basicamente funciona como las interfaces
//const ironMan = new Person('Tony');  

const person = new Person ('Tony Strak' , 'New York');
const ironMan = new Hero('IronMan',45,'Tony',person);
console.table(ironMan);

