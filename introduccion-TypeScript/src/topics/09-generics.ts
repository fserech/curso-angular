export function whatsMyType<T>(argument:T): T{ // TIPO ANY Rompe el autocompletado (IntelliSense)
 return argument
} 
//Genéricos (<T>) para mantener flexibilidad sin perder tipado.

const amIString = whatsMyType<string>('Hola mundo');
const amNumber = whatsMyType<number>(42);
const amIArray = whatsMyType<string[]>(['Hola', 'mundo']);



console.log(amIString.split(' '));
console.log(amNumber.toFixed(2));
console.log(amIArray.join(' '));        