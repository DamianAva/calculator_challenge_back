const addition = async (operandOne, operandTwo) => {
    return operandOne + operandTwo;
};

const subtraction = async (operandOne, operandTwo) => {
    return operandOne - operandTwo;
};

const multiplication = async (operandOne, operandTwo) => {
    return operandOne * operandTwo;
};

const division = async (operandOne, operandTwo) => {
    return operandOne / operandTwo;
};

const squareRoot = async (operandOne) => {
    return Math.sqrt(operandOne);
};

module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    squareRoot,
};
