// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH

function reverseThisString(string){
    return string.split('').reverse().join('');
  }

  let input = 'Hello';
  let reversed = reverseThisString(input);
  console.log(reversed); 

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string)  {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      let c = string[i];
      if (c === c.toUpperCase()) {
        result += c.toLowerCase();
      } else {
        result += c.toUpperCase();
      }
    }
    return result;
  }

  let input2 = 'Hello World';
let switched = swapCase(input2);
console.log(switched); // Output: "hELLO wORLD!"


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return array.map(f => (f - 32) * (5 / 9));
}

let array = [23, 32, 41, 50, 59];
let celsiusArray= toCelcius(array);
console.log(celsiusArray); 


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(theArray){
    return theArray.map(n => n >= 75);

}

let theArray = [20, 30, 50, 80, 90, 100];
let results = passOrFail(theArray);
console.log(results);



//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(num, trans){
    let theResult = [];
    for (let i = 0; i < num.length; i++){
        theResult.push(`${num[i]} ${trans[i]}`)
    }

    return theResult
}

let num = [2,3,4,5,6];
let trans = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
let theResult = germanNumbers(num, trans);
console.log(theResult);

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(nnumbers){
    return nnumbers.filter(n => {
      if (n < 2) {
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    });
  }

  const nnumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let primes = returnPrimeNumbers(nnumbers);
  console.log(primes);

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:

function logNumbers() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('CSC225 RULES I LOVE JAVASCRIPT');
      } else if (i % 3 === 0) {
        console.log('CSC225 RULES');
      } else if (i % 5 === 0) {
        console.log('I LOVE JAVASCRIPT');
      } else {
        console.log(i);
      }
    }
  }
  
  logNumbers();