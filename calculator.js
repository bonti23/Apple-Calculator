const display=document.getElementById("display");
let isResult = false;

function appendToDisplay(input){
    if (isResult) {
        display.value = input;
        isResult = false;
    } else {
        display.value += input;
    }
}
function clearDisplay(){
    display.value="";
    isResult = false;
}
function calculate(){
    try {
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        display.value = new Function("return " + expression)();
        isResult = true;
    } catch (error) {
        display.value = "error!";
        isResult = true;
    }
}
function toggleSign() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}
