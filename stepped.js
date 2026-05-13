const price = 3000;
if (price >= 5000){

const discount = price * 10 / 100;
// 10% discount
// console.log(discount)

const payamount = price - discount;
console.log(payamount)
} 
else if (price >= 2500) {
    const discount = price * 5 / 100;
    const payamount = price - discount;
    console.log(payamount);
}

else
{
    console.log(price);
}