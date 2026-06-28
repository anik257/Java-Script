const Kamal = 59;
const Rahim = 60;
if (Kamal > Rahim) {
    console.log("Kamal is bigger than Rahim");
}
else 
{
    console.log("Rahim is bigger than Kamal");
}

// inside function

function getMax(a, b) {
    if (a>b) {
        return a;
    }   else {
        return b;}
}
const max = getMax(10, 20);
console.log("Max is: " + max);


const max1 = getMax(100, 50);
const max2 = getMax(5, 15);
const ultimateMax = getMax(max1, max2);
console.log("Ultimate Max is: " + ultimateMax);


