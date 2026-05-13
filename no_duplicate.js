const studentName = [ 'Anik', 'Rahim', 'Karim', 'Anik', 'Sofik', 'Karim'];
const number = [12, 23, 22, 12, 23];

function noDuplicate(array){
    const unique = [];
    for (const item of array){
        if (unique.includes(item) === false){
            unique.push(item);
        }

        }   
        
        return unique;
}
const uniqueArray = noDuplicate(number  );
console.log(uniqueArray)