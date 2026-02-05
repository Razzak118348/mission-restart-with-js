const numbers = [1, 5, 6, 10, 45, 2, 7]
numbers.forEach(x => console.log(x))
console.log('after forEach loop in multiline')
numbers.forEach(num => {
    const doubled = num * 2;
    console.log(doubled)
})