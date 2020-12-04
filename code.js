
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

console.log(fizzBuzz('Job', 'Etum'));


//Solution for second Challenge. 

// let a = insert.value;

// if (a < 18) {
//     console.log('This user is a minor');
// } else if (a > 18 && a < 36 ) {
//     console.log('This is a youth!')
// } else {
//     console.log('This user is an elder!')
// }