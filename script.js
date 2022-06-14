function add (a,b){
    let total = a+b
    return total
}

function subtract (a,b){
    let total = a-b
    return total
}

function multiply (a,b){
    let total = a*b
    return total
}

function divide (a,b){
    let total = a / b
    return total
}


function operate(a,b,operator){
    if (operator === "+"){
    let final =  add (a,b)
    return final
    } else if (operator === "-"){
     let final = subtract (a,b)
     return final
    } else if (operator === "*"){
    let final = multiply (a,b)
    return final
    } else {
     let final = divide (a,b)
     return final
    }
}

console.log (operate(4,2,"/"))


/*
console.log(add(2,7)) /// 9
console.log(subtract(7,2)) /// 5
console.log(multiply(9,9)) /// 81
console.log(divide(4,2)) /// 2
*/