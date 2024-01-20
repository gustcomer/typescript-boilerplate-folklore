import fs from 'fs'

console.log(123)

var addNumber = function (a:any, b:any) {
  return a+b;
};

fs.writeFileSync("test.txt", "test")

console.log(addNumber(1, 2));
