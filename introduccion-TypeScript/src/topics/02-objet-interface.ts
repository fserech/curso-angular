// arreglo
const skills: string[] = ['Bash', 'Counter', 'Healing']; //array de strings


// como hacer para que hp siempre sea un numero y name siempre sea un string realizamos una interface
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //   con el signo de interrogación indicamos que es una propiedad opcional
}

const strider: Character = {
  name: 'Strider',
  hp: 30,
  skills: ['Bash', 'Counter', 'Healing']
};

strider.hometown = 'Rivendell'; // podemos agregar una propiedad opcional sin problemas
console.table(strider);// imprimimos el objeto en la consola

export {};