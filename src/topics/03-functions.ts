//Definicion de una funcion
//tipo de dato any --> por defecto si no es pone explicitamente
function addNumbers(a:number,b:number){
    return a+b;
}


// Funcion de flecha que indica el valor de retorno

const addNumbersArrow = (a:number, b:number): string =>{
    // Injeccion de una expresion literal de js
    return  `${a+b}`;
}

function multiply (firstNumber : number , SecondNumber? : number , Base : number = 2){
    return firstNumber * Base;
}


const result : string = addNumbers(1,2).toString();
const result_1 : string = addNumbersArrow(1,2);
const result_2 = addNumbers(1,2);
const result_multiply : number = multiply(5);

console.log({result,result_1,result_2,result_multiply});

interface Character{
    name : string;
    hp:number;
    // Tipificacion de una funcion
    showHp: () => void;
}


const healCharacter = (character : Character, amount : number) => {
    character.hp += amount;
}

const strider : Character = {
    name:'Aragon',
    hp:50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider,20);
healCharacter(strider,30);

strider.showHp();

// En conclusion los objetos siempre van a tener una interfaz o clase que nos
// indican como se van a ver dichos objetos
export{};
