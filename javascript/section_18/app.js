// Object Literals: Simply, it is pairs of key-value
// Object are reference types, which means we use const
const person = {
    firstName: "Mick",
    lastName: "Jagger"
};

// Multiple data types can be inside an object
const kitchenSink = {
    favNum: 1123123,
    isFunny: true,
    colors: ["red", "orange"]
};

// How to access data from objeccts: object["key"] or object.key
person["firstName"]; // "Mick"
kitchenSink["favNum"]; // 1123123
person.firstName; // "Mick"
kitchenSink.favNum; // 1123123

// Every key is converted into String
const years = {
    2000: "Good",
    2020: "Bad",
    null: "Good",
    true: "Bad"
};
let birthYear = 2000;
years[2000]; // "Good"
years["2000"]; // "Good"
years[birthYear]; // "Good"
years.birthYear; // undefined, looking exactly for 'birthYear' key, when using dynamic things like variables, use [] rather than .


// How to add data to objects: We can change values in objects
const midterms = {
    dani: 96,
    tom: 78
};
midterms.tom = 79;
midterms.tom = "C+";
midterms["dani"] = "A";
// new key-values
midterms.jon = "B+";
midterms["volka"] = "A-";

// Array of objects or object of arrays, nested objects are more powerful and common
const comments = [
    {
        username: "Tammy",
        text: "LOL",
        votes: 9
    },
    {
        username: "Volka",
        text: "Let's fight!",
        votes: 901
    }
]
