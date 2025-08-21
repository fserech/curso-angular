import { taxCalculation, type Product } from './06-funtion-destructuring'



const ShoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 100.0
    },
    {
        description: 'IPad Air',
        price: 150.0
    }
];

//Iva = 0.12
const [total, iva] = taxCalculation({
    products: ShoppingCart,
    IVA: 0.12
});

console.log('Total', total);
console.log('IVA', iva);
console.log(ShoppingCart);