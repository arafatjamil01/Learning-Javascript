//Falsy values in JS
// undefined, null, '', false, 0, NaN

const array = ['what',0,1,2,3,undefined, true, null, '', NaN]

console.log(countTruthy(array))
function countTruthy(array){
    let count = 0;
    for(let val of array){
        val && count ++;
    }
    return count
}