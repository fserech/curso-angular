interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'MESS',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

/*destructuracion*/
const { song:anotherSong, songDuration:duration, details } = audioPlayer;

/*destructuracion de detalles*/
const { author, year } = details;

//  console.log('song', anotherSong);
//  console.log('duration', duration);
//  console.log('author', author);
    console.log('year', year);


/*destructuracion de arreglos*/
const [ , , Gohan]: string[] = ['Goku', 'Vegeta', 'Gohan'];

console.log ('Personaje 3',Gohan);

export{};