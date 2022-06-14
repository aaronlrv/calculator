function add (a,b){
    let total = +a + +b
    return total
}

function subtract (a,b){
    let total = +a - +b
    return total
}

function multiply (a,b){
    let total = +a * +b
    return total
}

function divide (a,b){
    let total = +a / +b
    return total
}


function operate(a,b,operator){
    if (operator === "+"){
    let final =  add (a,b)
    console.log("Answer: ", final)
    return final
    } else if (operator === "-"){
     let final = subtract (a,b)
     console.log("Answer: ", final)
     return final
    } else if (operator === "*"){
    let final = multiply (a,b)
    console.log("Answer: ", final)
    return final
    } else {
     let final = divide (a,b)
     console.log("Answer: ", final)
     return final
    }
}



let buttons = document.querySelector(".numbers")
let display = document.querySelector(".calculator-display")
let addButton = document.querySelector(".addition")
let minusButton = document.querySelector(".subtract")
let divideButton = document.querySelector(".divide")
let multiplyButton = document.querySelector(".multiply")
let equals = document.querySelector(".equal")

let a = 0
let b = 0    
let operator = null
idTarget = null

buttons.addEventListener("click", e => {
    console.log(e.target)
    console.log(e)


  idTarget = e.target.id
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
 


})

equals.addEventListener("click", e => {

    operate(a, b, operator)
    console.log("Variable A: ", a)
    console.log("Variable b: ", b)


    
})


addButton.addEventListener("click", e => {

     operator = e.target.id

     display.textContent = ""
     display.textContent = ""
     display.append(idTarget)
 
    return operator


})
minusButton.addEventListener("click", e => {

     operator = e.target.id
    return operator
})
divideButton.addEventListener("click", e => {

     operator = e.target.id
    return operator
})
multiplyButton.addEventListener("click", e => {

     operator = e.target.id
    return operator
})




/*
console.log(add(2,7)) /// 9
console.log(subtract(7,2)) /// 5
console.log(multiply(9,9)) /// 81
console.log(divide(4,2)) /// 2
*/