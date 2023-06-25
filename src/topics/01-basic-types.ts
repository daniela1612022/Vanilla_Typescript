// typescrip infiere las variables , no es necesario definirlas 
// Variables :
// Si sabemos que la variable nunca va a cambiar se maneja 'const'

const name = 'Daniela';

// Si pensamos en algun momento cambiar el valor de la variable se usa 'let'
// Una variable puede soportar mas de un tipo de dato

let hpPoints : number | string | boolean = 95 ;

hpPoints = true;
hpPoints = 'Full';

// Tambien se puede restringir su valor de manera general

var hpPoints_ : number | 'Hola' = 100 ;
hpPoints_ = 'Hola';

const isAlive : boolean = true;

console.log({
    name,hpPoints,hpPoints_,isAlive
});
//Unificacion ? --- > No se ve en angular
//Exportacion de un objeto --> Con esto decimos que el archivo es un modulo
export{};