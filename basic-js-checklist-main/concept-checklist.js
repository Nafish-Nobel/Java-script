// 1. write 3 variables (number, string, boolean)

// var roll = 651;
// var name = 'nobel';
// var age18Plus = true;


// 2. 2 variables using (let, const)

// let myNum = 3;
// const myNum = 3;

// 3. Simple Math Operations() +, -, *, /, %)

// let x = 1;
// let y = 2;
// let z;
// console.log(z = x + y);
// console.log(z = x - y);
// console.log(z = x * y);
// console.log(z = x / y);
// console.log(z = x % y);

// 4. comparison ()

// console.log(6 != 6);

// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition

// const day = 2;
// switch(day){
//     case 1:
//         console.log("nobel");
//         break;
//     case 2:
//         console.log("sija");
//         break;
// }


// 6. if-else

// const x = 2;
// const y = 4;
// if(x<y){
//     console.log('value is big');
// }
// else{
//     console.log('value is small');
// }


//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19

// var number = 7; // loop variable
// while (number <= 19) {
//     console.log(number);
//     // number++;
//     number = number + 2;
// }



// 10. you have an array of numbers. display only the numbers bigger than 80
//  var numbers=[45, 86, 34, 87, 12, 98, 82, 33, 44];

//  for(var i= 0; i < numbers.length; i++){
//      var number = numbers[i];
//      console.log(number);
//  }

// 11. write a function that takes three numbers and returns the multiplication of the three numbers

// let a = 4;
// let b = 4;
// let c = 4;
// number();
// function numbers() {
   
//   console.log(a * b * c);
// } 

// function startFan() {
//     a=3;
//     b=3;
//     c=3;
//     console.log( a *  b *  c);
// }
// startFan();

numbers(2,2,2);
function numbers(num1, num2 ,num3){
    
    let totalNumbers = num1 * num2 * num3;
    console.log(totalNumbers);
}



// 12. declare an object and change any property of that object.

var computer = {
    price: 29000,
    storage: '256gb',
    color: 'silver',
    processor: 'intel i5'
}
computer.price = 22000;
console.log(computer);
