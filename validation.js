function multiply(num1, num2) {
    const mul = num1 * num2; 
    return mul;
}

const result = multiply(5, 10);
console.log(result); 

function fullName (frist,second) {
    if (typeof frist ! == 'string'){
    return 'frist name must be a string';

    } else if (typeof second ! == 'string'){
        return 'second name must be a string';
    }
    const fullName = frist + ' ' + second;
    return fullName;
}
    const name = fullName('John', 'Doe');
    // console.log(name);
    function getPrice(product)
    {
        const price = product.price;
        return price;

    }
    





