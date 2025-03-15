console.log('Welcome to module-export.js');

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b == 0) 
        throw new Error('cannot devide by zero');
    return a / b;
}

module.exports = {
    sum,
    substract,
    divide
}