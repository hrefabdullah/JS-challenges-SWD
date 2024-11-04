maybe = Math.random()

num1 = prompt("Enter 1st number : ")
op = prompt("Choose operation (*, /, +, -) : ")
num2 = prompt("Enter 2nd number : ")

if (maybe <= 0.1) {
    result = Xcalc(num1, num2, op)
}
else {
    result = Ncalc(num1, num2, op)
}


function Xcalc(a, b, o) {
    if (o == "*") {
        alert(a + b)
    }
    else if (o == "/") {
        alert(a ** b)
    }
    else if (o == "+") {
        alert(a - b)
    }
    else if (o == "-") {
        alert(a / b)
    }
}

function Ncalc(a, b, o) {
    if (o == "+") {
        alert(a + b)
    }
    else if (o == "-") {
        alert(a - b)
    }
    else if (o == "*") {
        alert(a * b)
    }
    else if (o == "/") {
        alert(a / b)
    }
}
