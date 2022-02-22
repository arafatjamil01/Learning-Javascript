//fizzbuz problem
//Divisible by 3 -> Fizz
//Divisible by 5 -> Buzz
//By both FizzBuzz
//Divisible by None, return input
//Not a number -> return Nan

const output = fizzBuzz(25*9)
console.log(output)

function fizzBuzz(input){
  if(typeof input !== 'number') return NaN;
  if(!input % 3 || !input % 5) return input;
  let fizz = input % 3 === 0 ? 'Fizz' : ''
  let buzz = input % 5 === 0 ? 'Buzz' : ''
  return fizz+buzz;
}