function oddAverage(numbers){
    const odds = [];
for (number of numbers){
    if(number % 2 ===1){
        console.log(number)
        odds.push(number);
    }
}

// console.log(odds)
let sum = 0;
for (const number of odds){
    sum = sum +number;
  
} 
  const count = odds.length;
  const avg = sum/count;
  return avg;

console.log(sum, count, avg);

}
const numbers = [42, 13, 58, 65, 81, 96, 7, 5, 105];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ',avg);
