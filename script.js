// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function FToC(fahrenhiet){
}
const convertToCelsius = (fah) => {
 }
return (fah - 32) * 5/9

//Question 1: Test Cases
// console.log(fahrToCel(32) +"°C")//0°C
// console.log(fahrToCel(212) + "°C")//100°C


   
// 2. Create a function that will calculate the average of numbers in an array.

let arrayAverage = (array) => {
  let arrayNum = 0;
  for(let i= 0; i < array.lenght; i++){
      arrayNum = arrayNum + array[i]
  }
  return (arrayNum/array.length)
}


//Question 2: Test Cases
// console.log(arrayAverage([5,2,9,7,1])) // 4.8
// console.log(arrayAverage([1,2,3])) // 2

  
// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
  let duoDiviChecker = (n,x,y) =>{
    if (n % x === 0 && n % y === 0) {
     return true;
    } else {
        return false
}
  }
// Question 2: Test Cases
// console.log(duoDiviChecker(12,3,4)) // true
// console.log(duoDiviChecker(49,7,9)) // false

  
// 4.Create a function that will output the first 100 prime numbers.

let  generatePrimeNumbers = (n) =>{
  let primes = [];
  let num = 2;

  while (primes.lenght < n){
    if (isprime(num)){
      primes.push(num);
    }
    num++
  }
  return primes;
}
function isprime(num){
  if (num < 2) {
    return false;
  }
  for (let i =2; i <= Math.sqrt(num); i++) {
    if (num % i === 0){
     return false;
    }
  }
  return true;
}
const primeNumbers = generatePrimeNumbers(100);
console.log(primeNumbers);


// 5.Create a function that will return a boolean specifying if a number is a prime number.

let isprime = (num) =>{
  if (num < 2) {
    return false;
  }
  for (let i =2; i <= Math.sqrt(num); i++) {
    if (num % i === 0){
     return false;
    }
  }
  return true;
}
// Question 5 : Test Cases
// console.log(isPrime(7)) // true
// console.log(isPrime(12)) // false


// // 6.Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers

let   getPositiveNumbers =(num) => {
  const positiveNumber = numbers.filter(function(number) {
    return number > 0;
  });
  return PositiveNumbers;
}

// Question 6 : Test Cases
// console.log(getPositiveNumbers([-2,5,0,10,-7,3])) // [5,10,3]


// 7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (const i = 1; i <=100; i++) {
  if (i % 3 === 0 && i % 5 ===0){
    console.log("FizzBuzz");
 } else if (i % 3 === 0){
  console.log ("Fizz")
 } else if (i % 5 === 0){
  console.log ("Buzz")
 } else {
   console.log(i);
 }
}




// 8.The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 

function generateHashtag(input) {
  if (!input || input.length === 0) {
    return false;
  }
  const words = input.split(" ").filter(word => word.length > 0);
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = "#" + capitalizedWords.join("");
  if (hashtag.length > 140) {
    return false;
  }
  return hashtag;
}