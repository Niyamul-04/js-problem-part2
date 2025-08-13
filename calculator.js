function add (num1, num2){
    return num1 + num2;
}
function substract (num1, num2){
    return num1 - num2;
}
function multiply (num1, num2){
    return num1 * num2;
}
function devide (num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        return add(a, b);
    } 
    else if (operation === 'substract') {
        return substract(a, b);
    } 
    else if (operation === 'multiply') {
        return multiply(a, b);
    } 
    else if (operation === 'devide') {
        return devide(a, b);
    } 
    else {
        return "Only 'add', 'substract', 'multiply', 'devide' operation is allowed";
    }
}

const result = calculator(5, 7, 'substract');
console.log(result);
