
// Los decoradores no son mas que funciones que pueden modificar el comportamiento de clases , propiedades y metodos
function classDecorator<T extends{new ( ... args : any[]):{}}>(
    // Se le añaden propiedades de comportamiento
    constructor : T
) {   
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
    }
}

// En el decorador se especifica si la clase es un servicio , componente o un modulo
// Los decoradores en angular no se crean usualmente , solo se consumen

// @service , @component , @module
@classDecorator
export class SuperClass {

    public myProperty : string = 'Abc123';
    print(){
        console.log('Hola Mundo')
    }

}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);