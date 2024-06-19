import fs from 'fs';

console.log(123);

const addNumber = (a: number, b: number) => {
   return a + b;
};

console.log(addNumber(1, 1));

fs.writeFileSync('test.txt', 'test');