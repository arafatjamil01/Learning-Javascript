const numbers = [1, 2, 3, 4];

// Mapping the numbers in to string.
// const mappedWithLi = numbers.map( number => `<li>${number}</li>`);
// const liHTML = '<ul>' + mappedWithLi.join('') + '</ul>';
// console.log(liHTML);

// Mapping an object
const products = numbers.map(number => ({ id: number, title: `Product ${number}` })); 
// The first brackets lets the arrow function know that there are objects inside. otherwise, the {} would be considered as code block

console.log(products);