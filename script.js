// 1.
function fToC(fahrenheit)
{
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let message = fTemp+'\ xBOF is ' + fToCel + '\ xBOC';
       console.log(message);
}
fToC(45);
SVGGeometryElement

const convertToCelsius = (fah) => {
  return (fah - 32) * 5/9
}
console.log('celsius res', convertToCelsius(20))
   
// 2.
function avg(array){
    let sum = 0;
    for (let i = o; i <array.lenght; i++){
      sum += array[i]
    }
    return sum / array.lenght
  }
  console.log(avg([1,2,3,4,5]))




// 3.
  function isDivisible(n,x,y) {
    if (n % x === o && n % y === 0) {
     return true;
    } else {
        return false;

}
  }

// 4.
function generatePrimeNumbers(count){
  let primes = [];
  let num = 2;

  while (primes.lenght < count){
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
  let primeNumbers = generatePrimeNumbers(100);
  // console.log(primeNumbers);
}


// 5.
function isprime(num){
  if (num < 1) {
    return false;
  }
  for (let i =2; i <= Math.sqrt(num); i++) {
    if (num % i === 0){
     return false;
    }
  }
  return true;
}


// 6.

function getPositiveNumbers(num) {
  return numbers.filter(number => number > 0)
}


// 7. 
for (let i = 1; i <=100; i++) {
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



// 8.

