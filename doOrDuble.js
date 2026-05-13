function doubleOrTripple (number,doDobule){
if (doDobule===true){
const result = number *2;
return result
} else{
    const result = number*3;
    return result;
}

}
console.log(doubleOrTripple(5,true));
console.log(doubleOrTripple(5,false));