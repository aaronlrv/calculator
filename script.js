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

if (a === "0" || b === "0"){
    alert ("Error!")
    return
}
    let total = +a / +b    
    return total
}



function operate(a,b,operator){
    if (operator === "+"){
    let final =  add (a,b)
     final = final.toFixed(5)
    console.log("Answer: ", final)
    return final
    } else if (operator === "-"){
     let final = subtract (a,b)
      final = final.toFixed(5)
     console.log("Answer: ", final)
     return final
    } else if (operator === "*"){
    let final = multiply (a,b)
     final = final.toFixed(5)
    console.log("Answer: ", final)
    return final
    } else {
     let final = divide (a,b)
      final = final.toFixed(5)
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
let clear = document.querySelector(".clear")

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

    if (b === null || operator === null){
        alert("Error! Stop being dumb and pick 2 numbers")
    }
    
    

    let answer = operate(a, b, operator)
    console.log("Variable A: ", a)
    console.log("Variable b: ", b)


    display.textContent = "                                   "
    display.append(answer)

    
})


addButton.addEventListener("click", e => {

    if (operator !== null){
        let answer = operate(a, b, operator)
        console.log("Variable A: ", a)
        console.log("Variable b: ", b)
    
    
        display.textContent = "                                   "
        display.append(answer)

        a = answer
    }

     operator = e.target.id

     display.textContent = 
     display.append(idTarget)
 
    return operator


})
minusButton.addEventListener("click", e => {

    if (operator !== null){
        let answer = operate(a, b, operator)
        console.log("Variable A: ", a)
        console.log("Variable b: ", b)
    
    
        display.textContent = "                                   "
        display.append(answer)

        a = answer
    }

    operator = e.target.id

    display.textContent = 
    display.append(idTarget)

   return operator

})
divideButton.addEventListener("click", e => {

    if (operator !== null){
        let answer = operate(a, b, operator)
        console.log("Variable A: ", a)
        console.log("Variable b: ", b)
    
    
        display.textContent = "                                   "
        display.append(answer)

        a = answer
    }

    operator = e.target.id

    display.textContent = 
    display.append(idTarget)

   return operator

})
multiplyButton.addEventListener("click", e => {

    if (operator !== null){
        let answer = operate(a, b, operator)
        console.log("Variable A: ", a)
        console.log("Variable b: ", b)
    
    
        display.textContent = "                                   "
        display.append(answer)

        a = answer
    }

    operator = e.target.id

    display.textContent = 
    display.append(idTarget)

   return operator

})


clear.addEventListener("click", e => {
    display.textContent = 
    a = null
    b = null 
    operator = null
    idTarget = null
})



/*
console.log(add(2,7)) /// 9
console.log(subtract(7,2)) /// 5
console.log(multiply(9,9)) /// 81
console.log(divide(4,2)) /// 2
*/