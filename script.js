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


let buttons = document.querySelector(".numbers")
let display = document.querySelector(".calculator-display")
let addButton = document.querySelector(".addition")
let minusButton = document.querySelector(".subtract")
let divideButton = document.querySelector(".divide")
let multiplyButton = document.querySelector(".multiply")
let equals = document.querySelector(".equal")

let a = 0
let b = 0


buttons.addEventListener("click", e => {
    console.log(e.target)
    console.log(e)


 let idTarget = e.target.id
 console.log(idTarget)
 console.log(typeof idTarget)
 display.append(idTarget)

 let screenNumber = display.textContent
 console.log(screenNumber)

 if (operator === null){
    a = screenNumber
    return a
 } else {
    b = screenNumber
 }

 console.log(a)

})

equals.addEventListener("click", e => {
    console.log(e.target.id)
    operate(a, b, operator)

})


addButton.addEventListener("click", e => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)

    return operator = e.target.id
})
minusButton.addEventListener("click", e => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)

    return operator = e.target.id
})
divideButton.addEventListener("click", e => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)

    return operator = e.target.id
})
multiplyButton.addEventListener("click", e => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)

    return operator = e.target.id
})




/*
console.log(add(2,7)) /// 9
console.log(subtract(7,2)) /// 5
console.log(multiply(9,9)) /// 81
console.log(divide(4,2)) /// 2
*/