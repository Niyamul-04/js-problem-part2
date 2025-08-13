function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, 5);
// console.log(result);


function fullName(first , second){
    if(typeof first !== 'string'){
        return 'first name should be a string';

    }

   else if(typeof second !== 'string'){
        return 'second name should be a string';
   }
   const full = first + '  ' + second;
   return full;
}

const full = fullName(     'jamal');
// console.log(full);

function getPrice(product){
    console.log(typeof product)
    const price = product.price;
    return price;
}

const price = getPrice ({name : 'alu', color: 'kala', kg:234})
console.log(price);