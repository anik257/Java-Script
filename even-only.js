function evenNumberOnly(numbers){
const evens = [];
    for (const number of numbers){
        if (number % 2 ===0){
        console.log(number)
        evens.push(number);
    }
}
return evens;
}
// const numbers =[33, 23, 11, 24, 22, 46];
// evenNumberOnly(numbers);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        if(number % 2 === 0){
            console.log(number); 
            sum = sum + number;
        }
    } 
    return sum;
} 
const numbers =[33, 23, 11, 24, 22, 46];
const sum = sumOfEvenNumbers (numbers);

console.log('sum of the even number is', sum);