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
// object spreading can be used to copy objects, and add some more key-values to them
const dataFromForm = {
    email: 'junharoket@naver.com',
    password: 'youandI31@',
    username: 'jun31245'
} // coming from user
const newUser = { ...dataFromForm, id: 123874182, isAdmin: false }; // combining user provided info with inner-secret info
console.log(newUser);

// rest: collect all as an *actual array*
// it is similar with the argument, but the core difference is that argument is a array looking not-array, but rest is an actual array
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


// destructing from an array: singling out some values from an array
const score = [140, 150, 160, 187, 194, 168];
const [s1, s2, s3] = score // alocate 0, 1, 2 index of score to seperate variable s1, s2, s3
console.log(s1, s2, s3);
const [s4, s5, ...remains] = score; // we can use ... syntax to allocate the rest
console.log(s4, s5, remains); // remains becomes an array


// destucting from an obejct: same as destructing from an array but it is not about order
const user = {
    email: 'junharoket@naver.com',
    password: 'youandI31@',
    firstName: 'Junha',
    lastName: 'Kwon',
    born: 2000,
    died: 'Not DEAD',
    bio: 'learning front/backend',
    city: 'Anyang',
}
const { email, city, bio } = user; // the variable name should match the key from the object
console.log(email, city, bio);
const { born: birthYear } = user; // if we want to change the name of the variable, we can use :
console.log(birthYear);
const user2 = {
    email: 'junharoket@hanmail.net',
    password: 'rnjswnsgk31@',
    firstName: 'Jake',
    lastName: 'Sully',
}
// we can also include default values from the variables
// by setting some variables default value, we can check whether the variable has the key or not 
const { died: deathYear = 'N/A' } = user; // it will give me the actual died value, since the object has the key died
const { died = 'N/A' } = user2; // user2 doesn'y have died, so it will give me the default value
console.log(deathYear);
console.log(died);



// destructing parameters: frequently used with objects, and we can destruct a parameter directly in a function
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(fullName(user));
const movies = [
    {
        title: 'Amadeus',
        score: 79
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
const highMovies = movies.filter(({ score }) => score >= 90);
console.log(highMovies);
const myMovies = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
})
console.log(myMovies);
