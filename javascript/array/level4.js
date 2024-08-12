const arr = ['ram', 'shyam', 'hari']

//Q1
//remove shyam
// expected output 
// ['ram', 'hari']

let output = arr.filter((item) => {
    if (item !== 'shyam') {
        return item
    }
})

console.log(arr)
console.log(output)


//Q2 count total strings which have length 4
//expected output : 1

let total = 0

arr.forEach((item) => {
    if (item.length == 4) {
        total++
    }
})
console.log(total)


// Q3 
// expected output: 12
// count total characters in all the strings in the array
let strLength = 0;

arr.forEach((item) => {
    strLength = strLength + item.length
})

console.log(strLength)

// Q4 using map, get the last characters

let lastChar = arr.map((item) => {
    return item[item.length - 1]
})


console.log(lastChar)



//Q5 find the total price.
const cartItems = [
    { id: 1, product: "hawkins", price: 30, quantity: 1 },
    { id: 1, product: "baltra", price: 10, quantity: 3 },
]

let totalPrice = 0;

cartItems.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity

})
console.log(totalPrice)