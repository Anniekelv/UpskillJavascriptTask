// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function FToC(fahrenhiet){
}
const convertToCelsius = (fah) => {
  return (fah - 32) * 5/9
}
console.log('celsius res', convertToCelsius(20))

   
// 2. Create a function that will calculate the average of numbers in an array.

function calculateAverage(array) {
  let numbers = [5,10,15,20];
  let avergae = calculateAverage(array);  
}
   console.log(avergae); 

  
// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
  function isDivisible(n,x,y) {
    if (n % x === 0 && n % y === 0) {
     return true;
    } else {
        return false
}
  }
console.log(isDivisible)

  
// 4.Create a function that will output the first 100 prime numbers.

function generatePrimeNumbers(n){
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
console.log(isprime)


// 6.Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers

function getPositiveNumbers(num) {
  const positiveNumber = numbers.filter(function(number) {
    return number > 0;
  });
  return PositiveNumbers;
}


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