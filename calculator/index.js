
let ansd = document.getElementById("sum-el")
function calc(optr){
    let num1 = document.getElementById("num1-el")
    let num2 = document.getElementById("num2-el")
    let ansi;
    switch (optr){
    case 'add': ansi = Number(num1.value) + Number(num2.value)
    break;
    case 'sub': ansi = Number(num1.value) - Number(num2.value)
    break;    
    case 'div': ansi = Number(num1.value) / Number(num2.value)
    break;    
    case 'mult': ansi = Number(num1.value) * Number(num2.value)
    break;
    }
   ansd.innerText += ansi
   num1.value ='0'
   num2.value ='0'
   Number(num1.value) = 0
   Number(num2.value) = 0
}

// Create four functions: , subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


