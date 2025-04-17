// easy way of using loops for arrays
const reddits = ['cringe', 'books', 'yuma', 'astral', 'hope'];
for (let post of reddits) {
    console.log(post);
}

// also effective for nested arrays
const colorSet = [["red", "crimson"], ["blue", "indigo"]];
for (let set of colorSet) {
    for (let colors of set) {
        console.log(colors);
    }
}

// also effective for strings
for (let char of 'hello world!') {
    console.log(char);
}

// object is NOT iterable!!!
const yearSet = {
    2000: "Good",
    2020: "Bad",
    2021: "Good",
    2022: "Bad",
    2023: "Good",
    2024: "Good",
};

const testScores = {
    jake: 90,
    paul: 50,
    logan: 80,
    wade: 79,
    johnson: 69
}
// for (let years of yearSet) {
//     console.log(years);
// }
// but.., using in rather than of will make it possible, but only the key
for (let years in yearSet) {
    console.log(`year ${years} was ${yearSet[years]}`);
}
// or use Object.keys(yearSet)
// Object.values(yearSet)
// Object.entries(yearSet)
// they all give you an array!
let totalScore = 0;
for (let score of Object.values(testScores)) {
    totalScore += score;
}
let avgScore = totalScore / (Object.values(testScores)).length;
console.log(avgScore);

