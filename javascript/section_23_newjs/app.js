// 1. default: we can declare a default value for a function
// if I pass in an argument, it will override the default
// if I don't pass in an argument, it will use the default value
// always put your parameter with a default go AFTER a parameter with no default(due to the order)
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie());
console.log(rollDie(20));


// 2. spread: we can spread an array, string, etc to pass in as seperate argument
const arr = [10, 20, 30, 40, 50];
console.log(Math.max(arr)); // arr = [10, 20, 30, 40, 50]
console.log(Math.max(...arr)); // ...arr = 10, 20, 30, 40, 50
const word = 'hello';
console.log(word);
console.log(...word);

// 3. spread on array: spread can be used for combining array
// also it can be used to create array of spreaded string
// [...array] context is actually just copying the original array
const arr1 = ['A', 'B', 'C'];
const arr2 = ['Red', 'Blue', 'Green'];
const arr3 = [...arr1, ...arr2, 'Junha']
console.log(arr3)
const word1 = 'Junha'
const word1Arr = [...word1];
console.log(word1Arr);


// 4. spread on objects: spread can be used in objects, especially for combining them
// when we combine objects that has the same key, order matters
// when we spread an array/string to a object, the key will be the index, and values will be the actual values corresponding to the index
const obj1 = {
    name: 'Junha',
    score: 90
}
const obj2 = {
    name: 'Jake',
    age: 26
}
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);
// object spreading can be used to copy objects, and add some more kry-values to them
const dataFromForm = {
    email: 'junharoket@naver.com',
    password: 'youandI31@',
    username: 'jun31245'
} // coming from user
const newUser = { ...dataFromForm, id: 123874182, isAdmin: false }; // combining user provided info with inner-secret info
console.log(newUser);

// rest: collect all as an actual array
// it is similar with thee argument, but the core difference is that argument is a array looking not-array, but rest is an actual array
// so, argument can't use array callbakcs, methods, => when rest can
function sum(...nums) {
    return nums.reduce((total, n) => total + n);
}
total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(total);
function raceResults(gold, silver, ...everybodyElse) {
    console.log(`Gold: ${gold}`);
    console.log(`Silver: ${silver}`);
    console.log(`And thanks to: ${everybodyElse}`);
}
raceResults('Jake', 'Paul', 'Lucas', 'Samantha', 'Lexy');