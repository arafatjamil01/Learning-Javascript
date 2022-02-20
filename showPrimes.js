//prime numbers within limit
//prime(whose factors are only 1 and itself)
showPrimes(20);

//function broken into single responsiblity principle
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

/*
//primary solution
function showPrimes(limit){
    for(let number = 2; number <= limit; number++){
        
        let isPrime = true;
        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
            isPrime = false;
                break;
            }
        }

        if(isPrime) console.log(number);
    }
}
*/
