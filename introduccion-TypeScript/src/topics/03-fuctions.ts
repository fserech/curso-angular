function addNumbers( a: number, b: number) {

    return a + b;
}; //funcion basico

//funcion de flecha
const addNumbersArrows = (a: number, b: number): string => {
    return `${a + b}`; //backticks para interpolacion 
};

function multiply(firstNumber: number, secondNumeber?: number, base:number=2) { //primer dato obligatorio; opcional, opcional con dato
 return firstNumber  * base;
}


const result: number = addNumbers(1, 2)
const result2: string = addNumbersArrows(1, 2);
const multiplyResult: number = multiply(5);
console.log({result, result2}); // undefined
export{}