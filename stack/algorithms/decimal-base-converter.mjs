import Stack from '../stack-array-based.mjs';

const convertToBinary = (decimalValue) => {
    const outputStack = new Stack();
    let outputString = '';
    let number = decimalValue;

    while (number > 0) {
        const rest = Math.floor(number % 2);
        outputStack.push(rest);
        number = Math.floor(number / 2)
    }

    while (!outputStack.isEmpty()) {
        outputString += outputStack.pop();
    }

    return outputString;
}

console.log("10 to binary: ", convertToBinary(10)); // 1010
console.log("856 to binary: ", convertToBinary(856)); // 11 0101 1000

const commonBases = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16
}

const convertDecimalTo = (decimalValue, base) => {
    const outputStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let outputString = '';
    let number = decimalValue;

    while (number > 0) {
        const rest = Math.floor(number % base);
        outputStack.push(rest);
        number = Math.floor(number / base)
    }

    while (!outputStack.isEmpty()) {
        outputString += digits[outputStack.pop()];
    }

    return outputString;
}

console.log("842670 to HEXADECIMAL: ", convertDecimalTo(842670, commonBases.hexadecimal)); // C DBAE
console.log("842670 to OCTAL: ", convertDecimalTo(842670, commonBases.octal)); // 3 155 656
console.log("842670 to BINARY: ", convertDecimalTo(842670, commonBases.binary)); // 1100 1101 1011 1010 1110
