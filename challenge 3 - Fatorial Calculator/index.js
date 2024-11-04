var num = 4
var result = 1

function factorial(num) {
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    console.log(result)
}

factorial(num)

var arr = []

for (let a = 1; a <= num; a++) {
    arr.push(a)
}

const red = (a,b)=>{
    return a * b
}

console.log(arr.reduce(red))