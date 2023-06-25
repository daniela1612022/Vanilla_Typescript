// Creacion de array
// 'const' --> no tiene metodos de asignacion
const skills : string[] = ['Bash','Counter','Healing'];
// Para tipar o definir el tipo de variables de un objeto se usa una interfaz
// interface --> No tiene interpretacion fisica en js
interface Character{
    name:string;
    hp:number;
    skills:string[];
    // Para definir una propiedad opcional '?' o undefined
    hometown?:string;
}

// Creacion de un objeto
const strider : Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);

export{};