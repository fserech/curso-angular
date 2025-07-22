const name:string = 'Strinder'; //cunando es constante su valor nunca cambiara
let hpPoints: number | 'FULL' = 95;// cuando es let su valor cambiara, el unico string que acepta sera FULL
const IsAlive: boolean = true;

hpPoints = 'FULL'; // Probando que se puede cambiar el valor de hpPoints a FULL

console.log(name, hpPoints, IsAlive);

export {};