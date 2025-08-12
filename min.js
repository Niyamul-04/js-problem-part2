const prices = [20000, 40000, 56000, 67000, 78000];

function getMin(numbers){
    let min = numbers [0];
    for(const num of numbers ){
       if(num < min){
        min = num;
       }

    }
    return min ;
}

const cheap = getMin(prices);
console.log('cheapest one is:',cheap);