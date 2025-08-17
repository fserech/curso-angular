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

function taxCalculation(options: TaxCalculationOptions): number [] {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;

    });

    return [total, total * options.IVA];
}

const shoppingCart = [phone, tablet];
const IVA = 0.12;

const result = taxCalculation({ 
    IVA: IVA,
     products: shoppingCart 
});

console.log ('Total', result [0])
console.log ('Iva', result [1])







export {};