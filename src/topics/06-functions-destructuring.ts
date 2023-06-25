
// Funcion para calcular el impuesto sobre la venta total sobre los productos
export interface Product {
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

export function taxCalculation( options : TaxCalculationOptions ) : number[] {
    let total = 0;
    options.products.forEach(product => {
        total += product.price;
    });

    return [total , total*options.tax]
}

const shoopingCart = [phone,tablet];
const tax = 0.15; // Impuesto sobre venta

// Se toma el valor de retorno
const result = taxCalculation({
    products : shoopingCart,
    tax,
})

console.log('Total : ', result[0]);
console.log('Tax : ', result[1]);
