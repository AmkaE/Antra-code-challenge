const arr = [10, 20, 30, 40];

// map test
const test1 = arr.map(el => el);
const test2 = arr.myMap(el => el);

// console.log(test1);
// console.log(test2);

// filter test
const test3 = arr.filter(num => num === 20);
const test4 = arr.myFilter(num => num === 20);

// console.log(test3);
// console.log(test4);

// reduce test
const test5 = arr.reduce((prevNum, currNum) => prevNum + currNum, 10);
const test6 = arr.myReduce((prevNum, currNum) => prevNum + currNum, 10);

console.log(test5);
console.log(test6);
