
// var age = 18;

// if (age >= 21) {
//     console.log('Is old enough');
// } else if (age === 18) {
//     console.log('Old enough to party!');
// } else if (age < 18 && age > 12) {
//     console.log('You are a brat.')
// } else {
//     console.log('Not old enough!');
// }

//The condition inside of () *NEEDS* to be truthy, for the THEN to execute




//-------------------------------------------------------------------------------------------------


 var color = 'orange';
 var num = 10;
 var stringNum = '10';
 var myStudentsAreAwesome = true;
 var thisClassIsEasy = false;

 var theSame = num == stringNum;
 var greaterThan = num > 5;

 var firstName = 'Zach';


// console.log(color)
// console.log(num)
// console.log(typeof myStudentsAreAwesome)
// console.log(color, num);
// console.log(+ - * /)
// console.log(5 + 5);
// console.log(theSame); = false
// console.log(greaterThan); = true (num=10 // greaterThan = 10>5 = true)
// console.log(firstName.includes('Z')) = true (Does firstName include Z)

console.log(num == stringNum); // =true (values equal eachother) only checks the value
console.log (num === stringNum); // =false  (value is the same, but datatype is not (number vs string))=== checks VALUE and DATA TYPE




//-------------------------------------------------------------------------------------------------




// var zero = 0; = falsey (ONLY 0 IS FALSEY) (ANY OTHER NUMBER IS TRUTHY)
// var num = 50; = truthy
// var empty = ''; = false (empty string)
// var str = 'Some string'; = truthy (If anything is inside, its truthy)
// var un = undefined; = falsey
// var t = true; = truthy
// var f = false; = falsey
// var n = null; = falsey
// var and = 100 && true; = true

//console.log(zero && num); = 0
// console.log(zero || num); = 50
// console.log (zero || empty || 75 || num); = 75  / / / / / (zero = false || empty = false || 75 = TRUE || num)


//-------------------------------------------------------------------------------------------------




var useName = '';

if (userName) {
    console.log('You entered a name and may continue');
} else {
    console.log('You must enter at least one character for your name.');
}