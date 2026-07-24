const numbers = [ 22, 33 ,44 ,55 ,66 ,77]

const sliced = numbers.slice(1, 4)
// console.log(sliced)
console.log(numbers)

const parts = numbers.splice(2,2, 98, 0, 56, 778)
console.log(parts)
console.log(numbers)