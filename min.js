const prices = [10, 20, 30, 40, 50];
function getMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log('The cheapest price is:', cheap);

