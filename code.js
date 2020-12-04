
//Working solution for first Challenge.

function fizzBuzz(firstString, secondString) {
    let combinedLength = firstString + secondString;

    if(combinedLength.length % 5 === 0 && combinedLength.length % 3 === 0) {
        console.log('FizzBuzz')
    } else if (combinedLength.length % 5 === 0) {
        console.log('Buzz');
    } else if (combinedLength.length % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log('Not divisible by 5 or 3')
    }
}

fizzBuzz('Job', 'Etum');


//Solution for second Challenge. 

let age = prompt("What is your age?");

if (age < 18) {
     console.log('User is a minor');
     } else if (age > 18 && age < 36 ) {
     console.log('User is a youth!')
 } else {
     console.log('User is an elder!')
 }