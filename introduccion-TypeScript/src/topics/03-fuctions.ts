function addNumbers( a: number, b: number) {

    return a + b;
}; //funcion basico

//funcion de flecha
const addNumbersArrows = (a: number, b: number): string => {
    return `${a + b}`; //backticks para interpolacion 
};

function multiply(firstNumber: number, secondNumeber?: number, base:number=2) {
 return firstNumber  * base;
}


const result: number = addNumbers(5, 10)
const resultArrow: string = addNumbersArrows(5, 10);

console.log({result, resultArrow}); // undefined
export{}