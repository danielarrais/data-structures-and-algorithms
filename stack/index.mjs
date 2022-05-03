import Stack from './stack-array.mjs';

const stackSample = new Stack();

stackSample.push('1');
stackSample.push('2');
stackSample.push('3');
stackSample.push('4');
stackSample.push('5');

console.log('Stack: ', stackSample);
console.log('Pop item: ', stackSample.pop());
console.log('Stack: ', stackSample);
console.log('Pop item: ', stackSample.pop());
console.log('Stack: ', stackSample);
console.log('Pop item: ', stackSample.pop());
console.log('Stack: ', stackSample);
console.log('Pop item: ', stackSample.pop());