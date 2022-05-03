import { measure } from '../utils/performance.mjs';
import Stack from './stack-array-based.mjs';
import StackObject from './stack-object-based.mjs';

const stackSample = new Stack();

stackSample.push('1');
stackSample.push('2');
stackSample.push('3');
stackSample.push('4');
stackSample.push('5');

console.log('Stack: ', stackSample.toString());
console.log('Pop item: ', stackSample.pop());
console.log('Stack: ', stackSample.toString());
console.log('Pop item: ', stackSample.pop());
console.log('Stack: ', stackSample.toString());
console.log('Pop item: ', stackSample.pop());
console.log('Stack: ', stackSample.toString());
console.log('Pop item: ', stackSample.pop());

const stackObject = new StackObject();

stackObject.push('1');
stackObject.push('2');
stackObject.push('3');
stackObject.push('4');
stackObject.push('5');

console.log('Stack: ', stackObject.toString());
console.log('Pop item: ', stackObject.pop());
console.log('Stack: ', stackObject.toString());
console.log('Pop item: ', stackObject.pop());
console.log('Stack: ', stackObject.toString());
console.log('Pop item: ', stackObject.pop());
console.log('Stack: ', stackObject.toString());
console.log('Pop item: ', stackObject.pop());

console.log('Performance: ');

for (let i = 0; i < 1000000; i++) {
    stackObject.push('Performance Stack object based push: ' + i);
    stackSample.push('Performance Stack object based push: ' + i);
}

measure(
    'Performance stack object based push',
    () => stackObject.push('5')
);

measure(
    'Performance stack array based push',
    () => stackSample.push('5')
);

measure(
    'Performance stack object based peek',
    () => stackObject.peek()
);

measure('Performance stack array based peek',
    () => stackSample.peek()
);

measure(
    'Performance stack object based pop',
    () => stackObject.pop()
);

measure('Performance stack array based pop',
    () => stackSample.pop()
);