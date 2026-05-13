const friends = ['Salam', 'Kalam', 'Tomal', 'Rofik']
friends.sort();
const numbers = [24, 19, 100, 37, 6, 111, 22, 20]
// console.log(ages);
// numbers.sort();
// console.log(numbers);
const sorted_numbers = numbers.sort (function (a,b) {return a-b });
console.log(sorted_numbers);