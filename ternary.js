// const age = 12;
// if (age >=18){
//     console.log('you can vote')
// }
// else{
// console.log('you can not vote')
// }

// simple ternery

// age >= 18 ? console.log("You can vote") : console.log('You can not vote')

let price = 500;

const isleader = true;

// if (isleader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price)

// price isleader === true ? 0  : price + 100;

// if (isleader === true){
//     if (price > 1000) {
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
   
// }
//  else{
//         price = price + 1000;
//     }
    
    price = isleader === true ?
     (price > 1000 ?
      price / 2 : 0) : 
      price + 1000;
      console.log (price);


