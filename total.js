const numbers = [ 300, 100, 700, 1200];

const products =
[
    {name : 'shampo', price : 300},
    {name : 'chiruni', price : 390},
    {name : 'hair gel', price : 3390},
    {name : 'panti', price : 30}
]

function getShoppingTotal (products){
    let total = 0;
    for (const product of products){
   total = total + product.price;
    }
    return total;
    }

    const total = getShoppingTotal(products);
    console.log('total ajke khosabe', total);
