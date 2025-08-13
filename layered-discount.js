// Price rules:
// First 100 units → 100 per unit
// Next 100 units (101–200) → 90 per unit
// Above 200 units → 70 per unit

function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        return quantity * first100Price;
    } 
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        return first100Total + remainingTotal;
    } 
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        return first100Total + second100Total + remainingTotal;
    }
}

console.log(layeredDiscountedTotal(250)); // 
