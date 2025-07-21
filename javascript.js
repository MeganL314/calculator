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
    console.log(operator);
    console.log(a);
    console.log(b);

    if (operator == 'x'){
        return multiply(a,b)
    }
    else if (operator == '-'){
        return subtract(a,b)
    }
    else if (operator == '/'){
        return divide(a,b)
    }
    else if (operator == '+'){
        return add(a,b)
    }
}


const screen = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


let equation = [];
let screen_text = "";
let justEvaluated = false;



buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // run operate() if '=' sign is hit
        if(button.textContent == '='){

            // check to make sure an operator was included in equation
            if (!['+','-','/','x'].some(val => equation.includes(val)) ||
        equation.length<3){
                screen.textContent = "No";
                console.log("NO, Wrong");
            }

            // if there was an operator, check to make sure there isn't division by zero
            else{
                let expression = buildExpression(equation);
                console.log(expression);
                if(expression[1] == '/' && expression[2] == 0){
                    screen.textContent = "No, can't.";
                }

                // else run operate() if '=' sign is hit
                // re-assign screen content and begin equation with answer
                else{
                    justEvaluated = true;
                    let answer = operate(expression[1], expression[0], expression[2]);
                    console.log(answer);
                    screen_text = answer;
                    screen.textContent = screen_text;
                    equation = [answer];
                }
            }
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
            // if so, replace with the most recent equation operator that was pressed
            if(['+','-','/','x'].some(val => equation.includes(val))){
                const last = equation[equation.length-1];

                if(['+','-','/','x'].includes(last)){
                    equation = equation.slice(0, equation.length-1);
                    equation.push(button.textContent);
                    screen_text = screen_text.slice(0, screen_text.length-1) + button.textContent;
                    screen.textContent = screen_text;
                }
                
                // if not, run operate() and display an answer
                else{
                    justEvaluated = true;
                    let expression = buildExpression(equation);
                    let answer = operate(expression[1], expression[0], expression[2]);
                    screen_text = answer + button.textContent;
                    screen.textContent = screen_text;
                    equation = [answer, button.textContent];
                    console.log(equation)
                }
            }
            // if an equation operator was pressed but there isn't one yet, continue building equation
            else{
                equation.push(button.textContent);
                screen_text = screen_text + button.textContent;
                screen.textContent = screen_text;                
            }
        }
        // else just continue building the equation



        else{
            // build equation if justEvaluated = FALSE;

            if (justEvaluated != true){
                equation.push(button.textContent);
                screen_text = screen_text + button.textContent;
                screen.textContent = screen_text;
            }
            else if (justEvaluated = true){
                justEvaluated = false;
                equation = [button.textContent];
                screen_text = button.textContent;
                screen.textContent = screen_text;
            }

        }
    //console.log(equation);
    });
    //
});


function buildExpression(array) {
    let output = [];
    const operators = ['+', '-', '/', 'x'];

    let current = ''
    for(let item of array){
        // console.log(item);
        if(!operators.includes(item)){
            current = current + item;
        }
        else{
            output.push(Number(current));
            current= '';
            output.push(item);
        }
    }
    output.push(Number(current));
    return output;
}


