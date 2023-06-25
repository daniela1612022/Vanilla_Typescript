
// Funcion para calcular el impuesto sobre la venta total sobre los productos
interface Product {
    description : string;
    price : number;
}

const phone : Product = {
    description : 'Nokia A1',
    price : 150.0
}

const tablet : Product = {
    description: 'iPad Air',
    price:250.0
}

interface TaxCalculationOptions {
    tax : number;
    products : Product[];
}

// Formas de desestructurar 
//function taxCalculation( options : TaxCalculationOptions ) : [number,number] {
//function taxCalculation( {tax , products} : TaxCalculationOptions ) : [number,number] { 
function taxCalculation( options : TaxCalculationOptions ) : [number,number] {
    
    const {tax , products} = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total , total*tax]
}

const shoopingCart = [phone,tablet];
const tax = 0.15; // Impuesto sobre venta

// Se toma el valor de retorno
const [total , taxTotal] = taxCalculation({
    products : shoopingCart,
    tax,
})

console.log('Total : ', total);
console.log('Tax : ', taxTotal);

export{};