// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let v = 1; v <= n; v++) {
        if(v % 15 === 0) {
            console.log('fizzbuzz');
        } else if (v % 3 === 0) {
            console.log('fizz');
        } else if (v % 5 === 0 ) {
            console.log('buzz');
        } else {
            console.log(v);
        }
    }
}

module.exports = fizzBuzz;
