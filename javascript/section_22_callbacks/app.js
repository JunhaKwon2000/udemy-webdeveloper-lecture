// // forEach(): executed a certain function for each element of the array
// const num = [1, 2, 3, 4, 5];
// num.forEach(function (el) {
//     console.log(el);
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// // map(): similar to forEach but creates new array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })
// doubles


// const movies2 = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const titles = movies2.map(function (movie) {
//     return movie.title.toUpperCase();
// })

// // *important* arrows: making functions not using the function keyword
// // useful when creating no name function
// // for single argument, () is not needed
// const add = (x) => { return x ** 2 };
// console.log(add(3));

// const rollDie = () => {
//     console.log('Dice Rolled');
// }
// rollDie();

// // Implicit return: when returning only one thing, use () rather than {}
// // no return keyword
// // only works on single expression, one value only
// const rollDie2 = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// // Even () can be reduced
// const add2 = (a, b) => a + b


// const movies3 = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// // const newMovies = movies.map(function (movie) {
// //     return `${movie.title} - ${movie.score / 10}`
// // })

// const news = movies3.map((movie) => `${movie.title} - ${movie.score / 10}`);


// // setTimeout & setInterval
// // not array, but still callback
// // execute after 3s
// setTimeout(() => { console.log('Hello World!') }, 3000);
// // runs imediately
// console.log('refresh');

// // setInterval: repeat something for every second
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// // clearInterval: stop
// // enter the value of id
// // clearInterval(id)

// filter: creates new array for true values
// non-destructive method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const filteredNumbers = numbers.filter((num) => {
//     return num < 10;
// })
// console.log(filteredNumbers);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const highRateMovies = movies.filter((movie) => {
//     return movie.score >= 80;
// })
// console.log(highRateMovies);

// // Combine map and filter
// // const highMovies = movies.filter((m) => {
// //     return m.score >= 80
// // })
// // const highTitles = highMovies.map((m) => {
// //     return m.title;
// // })

// const highMovies = movies
//     .filter((m) => {
//         return m.score >= 80
//     })
//     .map((m) => {
//         return m.title;
//     })
// console.log(highMovies);

// // Every & Some: returns boolean
// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
// // did everyone's score >= 90? true or false (and)
// console.log(exams.every(score => score >= 90));

// // did some of the movies created after 2000? (or)
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2010
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// console.log(movies.some(m => m.year > 2015));

// reduce: reduce the array to one value
// const price = [9.99, 1.50, 19.99, 49.99, 30.50];
// const priceSum = price.reduce((total, items) => total + items);
// console.log(priceSum);

// const minPrice = price.reduce((minValue, items) => {
//     if (minValue > items) {
//         return items;
//     }
//     else {
//         return minValue;
//     }
// })
// console.log(minPrice);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const highRateMovie = movies.reduce((hrMovie, m) => {
//     if (hrMovie.score < m.score) {
//         return m;
//     }
//     else {
//         return hrMovie;
//     }
// })
// console.log(highRateMovie);



// // We can provide an *initial value* as the 2nd arg to reduce:
// const evens = [2, 4, 6, 8];
// evens.reduce((sum, num) => sum + num) //20
// evens.reduce((sum, num) => sum + num, 100) //120

// arrow and this
