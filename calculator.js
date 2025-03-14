const display=document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try {
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/"); // Replace symbols
        display.value = new Function("return " + expression)();  // Safe evaluation
    } catch (error) {
        display.value = "error!";
    }
}
function toggleSign() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}
