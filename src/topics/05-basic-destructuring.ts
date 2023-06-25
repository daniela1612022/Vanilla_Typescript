// Definicion de dos interfaces con las cuales moldearemos un objeto

interface AudioPlayer {
    audioVolume : number;
    songDuration : number;
    song : string;
    details : Details;
}

interface Details {
    author : string;
    year : number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author:'Ed Sheeran',
        year:2015
    }
}


// Desestructuracion de Objetos

const song = 'New Song';

//Creacion de constante desestructuracion
const {
    song : anotherSong ,
    songDuration:duration,
    details : {author}
} = audioPlayer;

//const {author} = details;

console.log('Song : ' , song);
console.log('Song : ' , anotherSong);
console.log('Song : ' , duration);
console.log('Song : ' , author);

//Sin desestructuracion
console.log('Duration : ' , audioPlayer.songDuration);
console.log('Author : ' , audioPlayer.details.author);


// Desestructuracion de arreglos

// Sin Desestructuracion
const dbz : string[] = ['Goku','Vegeta','Trunks'];
const vegeta = dbz[1] || 'No se encontro el personaje';


console.log('Personaje 3 : ' , dbz[2] || 'No se encontro el personaje' );
console.log('Personaje 2 : ' , vegeta );

// Con Desestructuracion

const [ p1, p2 ,p3 = 'Not found'] : string[] = ['Goku','Vegeta','Trunks'];

console.log('Personaje 1 : ' , p1);
console.log('Personaje 2 : ' , p2);
console.log('Personaje 3 : ' , p3);

export{}; 