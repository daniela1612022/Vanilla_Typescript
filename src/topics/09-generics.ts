// Funcion que necesite ser capaz de procesar la informacion dependiendo del tipo del argumento
// En lo posible no usar any -> Queda sin restricciones
// Los genericos dependen del argumento que sea enviado <T>
export function whatsMyType <T> ( argument : T ) : T{
    return argument;
}

// Genericos <> especificacion de tipo
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' ')); //split separa los strings 
console.log(amINumber.toFixed()); // de numero a string 
console.log(amIArray.join('-')); // Union de todos los elementos del array

