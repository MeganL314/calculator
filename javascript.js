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

