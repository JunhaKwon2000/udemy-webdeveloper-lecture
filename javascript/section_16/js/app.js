// function checkLoggedIn(isLoggedIn) {
//     if (isLoggedIn === true) {
//         console.log("You are currently logged in.");
//     }
//     else {
//         console.log("You are currently logged out.");
//     }
// }
// let isLoggedIn = true;
// checkLoggedIn(isLoggedIn);

// ----------------------------------------------------------

// const dayOfWeek = prompt("What day is it?").toLowerCase();
// function checkDay(dayOfWeek) {
//     if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
//         console.log("It's weekend!");
//     }
//     else if (dayOfWeek === "friday") {
//         console.log("TGIF!");
//     }
//     else {
//         console.log("Keep up...");
//     }
// }
// checkDay(dayOfWeek);

// --------------------------------------------------------------

// function fee(age) {
//     if (age < 5) {
//         console.log("Free");
//     }
//     else if (age < 10) {
//         console.log("10$");
//     }
//     else if (age < 65) {
//         console.log("20$");
//     }
//     else {
//         console.log("10$");
//     }
// }
// let age = parseInt(prompt("Enter your age"));
// fee(age);

// ----------------------------------------------------------------

// const pw = prompt("Enter password");
// if (pw.length >= 6) {
//     if (pw.indexOf(" ") === -1) {
//         console.log("Valid password.");
//     }
//     else {
//         console.log("Your password should not have spaces.")
//     }
// }
// else {
//     console.log("Invalid password(must be 6+).");
// }

// ------------------------------------------------------------------

// False values : false, 0, "", null, NaN, undefined
// True values : Everything else than false values

// &&: and, ||: or, !: not
// const pw = prompt("Enter password");
// if (pw.length >= 6 && pw.indexOf(" ") === -1) {
//     console.log("Valid password!")
// }
// else {
//     console.log("Invalid password(must be 6+, no spaces).");
// }

// const age = -100;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// }
// else if (age >= 5 && age < 10) {
//     console.log("10$");
// }
// else if (age >= 10 && age < 65) {
//     console.log("20$");
// }
// else {
//     console.log("Enter a valid age!");
// }

// const firstName = prompt("Enter your first name!")
// if (!firstName) {
//     firstName = prompt("Enter again!");
// }

// if (!((age >= 0 && age < 5) || age >= 65)) {
//     console.log("You are not a senior or a baby!");
// }

// ----------------------------------------------------------

// Swwitch: Does not use much, don't  worry!
const day = 6;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("What the!"); break;
}