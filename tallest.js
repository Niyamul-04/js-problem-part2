const heights = [ 65, 66, 68, 89, 90];

function getmax(numbers){
    let max = numbers [0] ;
    for(const num of numbers){
        
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getmax(heights);
console.log('max value is', max);