const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const divide = function(a,b) {
	return a/b;
};

const multiply = function(a,b) {
  return a*b;
};

let num1;
let num2;
let operation;


const operate = function(operator, a, b){
    if (operator == multiply){
        return multiply(a,b)
    }
    else if (operator == subtract){
        return subtract(a,b)
    }
    else if (operator == divide){
        return divide(a,b)
    }
    else if (operator == add){
        return add(a,b)
    }
}

const screen = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let equation = [];
let screen_text = "";

// Fill in new
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // run operate() if '=' sign is hit
        if(button.textContent == '='){
            operate(equation);
        }
        // clear the screen if clear is hit
        else if(button.textContent == 'clear'){
            equation = [];
            screen_text = "";
            screen.textContent = screen_text;
        }
        // save the equation but clear the screen if +-/x is hit
        else if(button.textContent == '+' || button.textContent == '-' || button.textContent == 'x' ||
            button.textContent == '/'
        ){
            // when any of the equation operators are press, check if they're already there
            if(['+','-','/','x'].some(val => equation.includes(val))){
                operate(equation);
                // screen_text should have the result of operate
                screen_text = "";
                screen.textContent = screen_text;
                equation = [];
            }
            else{
                equation.push(button.textContent);
                screen_text = screen_text + button.textContent;
                screen.textContent = screen_text;                
            }
        }
        // else just save the equation
        else{
            // build equation first
            equation.push(button.textContent);
            screen_text = screen_text + button.textContent;
            screen.textContent = screen_text;
        }
    console.log(equation);
    });
    //
});





