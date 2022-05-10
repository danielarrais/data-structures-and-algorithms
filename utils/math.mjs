export const factorial = (number) => {
    if(number === 0) return 0;
    if(number === 1) return number;
    return number * factorial(number - 1);
}