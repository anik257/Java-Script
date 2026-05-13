function makeAvg(numbers,size){
let sum = 0;
for (let i = 0; i < size; i++){
    sum += numbers[i]
}

return sum / size;

}
let arr =[10, 20, 30, 40, 50];
let avg = makeAvg(arr, arr.length);
console.log("Average:",avg);