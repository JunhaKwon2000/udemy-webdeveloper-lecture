// Unlike String, Arrays can be changed!
let color = ["red", "orange", "blue"];
color[2] = "green";
// Changes  the original array's length!(empty slots)
color[10] = "indigo"

let beatles = ["paul", "john", "george"];
beatles[3] = "ringo";


// push & pop: adds & removes from the END
let members = ["jake", "paul", "volka", "aspinall"]
members.push("merab");
members.push("oliveria", "jones");
// members.pop();
// let mem = members.pop();

// shift & unshift: removes & adds from the START
let games = ["Elden Ring", "Nier: Automata", "Halo"]
games.unshift("Watchdogs");
// Search about stacks and ques!

// concat: merge arrays!
let arr1 = ["A", "B", "C"];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr1.concat(arr2);

// includes: If an array includes a particular value!
arr1.includes("A"); // true
arr1.includes("D"); // false

// indexof: Index of a paricular value!
arr1.indexOf("C"); // 2
arr1.indexOf("D"); // -1

// reverse: Reverse an array!(destructive method - changes the original array)
arr1.reverse(); // ["C", "B", "A"]

// slice: Slice the portion of the array(includes the start, excludes the end)!
let colors = ["R", "G", "B", "P"];
colors.slice(1);
colors.slice(1, 3);
colors.slice(-3); // last 3

// splice: Changing the contents of the array at a specific index!
// splice(index, number of contents to delete, value)
let month = ["Jan", "Mar", "Aprl", "May"];
month.splice(3, 1); // returns an array containing only ["May"]
month.splice(1, 0, "Feb"); // inserts "Feb" after "Jan"

// sort: Sorts an array!(convert everything to string and compares the utf values.. not so useful)
let scores = [1, 70, 100, 2500, 9, 12, -4, 34];
scores.sort();


// --------------------------------------------------------------------

// === operator in arrays!
let a = ["hi", "bye"];
let b = ["hi", "bye"];
a === b; // false

// js references the memory where the array is allocated!
let aCopy = a; // both pointing to the same array(same exact reference)
a === aCopy; // true!

// --------------------------------------------------------------------

// why use const in arrays?
// we can change the contents of the array can be changed even using cosnt!
// it is because the array is the reference(arrows pointing to the actual array)
// as long as we don't change the actual address, the contents can be changed!

const nums = [1, 2, 3];
nums.push(4); // possible(same shell, just new contents)!
nums.pop(); // possible(same shell)!
// nums = 1; // impossible(reasign)!
// nums = [1, 2, 3, 4] // impossible(new array)!

// nested arrays: arrays in arrays!(matrix)
const colorSet = [["red", "crimson"], ["blue", "indigo"]];
const ticTac = [
    ["O", null, "X"],
    [null, "O", "X"],
    [null, null, "O"]
];
ticTac[1][1]; // access the center O(second row, second element)