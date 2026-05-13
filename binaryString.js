function zero(binaryString){

for(let char of binaryString){
if (char !== '0' && char !== '1'){

    return "Invalid input! Only binary string are allowed.";

}

}

let countZero = 0;
for (let char of binaryString){
    if(char === '0'){
    countZero++;
    }
    return countZero;
}
}

console.log(zero('101010'));
console.log(zero('11111'));
console.log(zero('00000'));
