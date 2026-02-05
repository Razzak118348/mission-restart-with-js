const numbers = [1, 5, 16, 10, 45, 2, 7]
const firstEven = numbers.find(x => x % 2 === 0)
// console.log(firstEven)

// const greaterThan50 = numbers.find( num => num < 50)
const greaterThan = numbers.find( num => num > 4) //this will return the first number greater than 4 which is 5
console.log(greaterThan);