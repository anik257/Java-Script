var weight = 75;
var height = 1.70;
var bmi = weight / (height * height);
console.log("Your BMI is: " + bmi.toFixed(2));

if (bmi > 18.5){

    console.log('You are underweight.');
}
else{
    if(bmi > 18.5 && bmi <= 24.9){
        console.log('you are normal');
    }
    else{
        if(bmi >= 25 && bmi <= 29.9){
            console.log('You are over weight ');
        }
        else {
            console.log('you are obese');
        }
    }
}
   
