const products =[
   {name : 'shampo', price : 300 , quantity: 3 },
   {name : 'chiruni', price : 39  , quantity: 5},
   {name : 'hair gel', price : 3390 , quantity: 7 },
   {name : 'panti', price : 30 , quantity:  6}       
]

function cardTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductsCost = product.price * product.quantity;
        total = total + thisProductsCost;
    }
    return total;
}
const shoppingCost = cardTotal(products);
console.log(shoppingCost);
