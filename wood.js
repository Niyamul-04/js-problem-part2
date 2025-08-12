// chair ---> 3 Cft 
// table ----> 10 cft  
// bed ---- 50 cft 


// function woodQuantity(chair, table, bed){
//     const perChairWood = 3;
//     const perTableWood = 3;
//     const perBedWood = 3;

//     const chairTotalWood = chair * perChairWood;

//     const tableTotalWood = table * perTableWood;

//     const bedTotalWood = bed * perBedWood;

//     const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

//     return totalWood;

// }


// const wood = woodQuantity (34, 4, 1);
// console.log('wood needed', wood);


function priceQuantity(shirt, pant, shoe){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = shirt * perShirtPrice;
    const pantTotalPrice = pant * perPantPrice;
    const shoeTotalPrice = shoe * perShoePrice;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}

const price = priceQuantity(3, 5, 7);
console.log(price);
