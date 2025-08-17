interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'IPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    IVA: number;
    products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions):  [number, number] {
    //function taxCalculation({IVA, products}: TaxCalculationOptions):  [number, number] {
         function taxCalculation(options: TaxCalculationOptions):  [number, number] {
    
          const {IVA, products} = options;
            let total = 0;

    products.forEach( ({price}) => {
        total += price;

    });

    return [total, total * IVA];
}

const shoppingCart = [phone, tablet];
const IVA = 0.12;

const [total, ivaResult] = taxCalculation({ 
    IVA: IVA,
     products: shoppingCart 
});

console.log ('Total', total)
console.log ('Iva', ivaResult)







export {};