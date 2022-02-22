//find grade, from an array of marks, find average marks and check grade
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

let score = [83,72,99,100]

console.log(calculateGrade(score))

function calculateGrade(marks){
    let average = calculateAverage(marks);

    if(average < 60 ) return 'F'
    if(average < 70 ) return 'D'
    if(average < 80 ) return 'C'
    if(average < 90 ) return 'B'
    return 'A'
}

function calculateAverage(array){
    let sum = 0;

    for (let mark of array) {
      sum += mark;
    }

    return sum / array.length;
}