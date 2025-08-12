// const phones = [
//     {name : 'samsung', price : 20000, camera: '12mp', color: 'black'},
//     {name : 'xiomi', price : 200000, camera: '12mp', color: 'black'},
//     {name : 'iphone', price : 2000000, camera: '12mp', color: 'black'},
//     {name : 'daamsung', price : 2000000, camera: '12mp', color: 'black'},
//     {name : 'walton', price : 2000, camera: '12mp', color: 'black'}
// ]

// function getCheapestPhone(phones){
//     let min = phones [0];
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone
//         }
//     }
//     return min;


// }

// const cheap = getCheapestPhone(phones);
// console.log('cheapest phone is:', cheap);



const phones = [
    {name : 'samsung', price : 20000, camera: '12mp', color: 'black'},
    {name : 'xiomi', price : 200000, camera: '12mp', color: 'black'},
    {name : 'iphone', price : 2000000, camera: '12mp', color: 'black'},
    {name : 'daamsung', price : 2000000, camera: '12mp', color: 'black'},
    {name : 'walton', price : 2000, camera: '12mp', color: 'black'}
]

function getMaxPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price ){
            max = phone

        }
    }
    return max;
}

const dami = getMaxPhone(phones);
console.log('dami phone is:', dami);