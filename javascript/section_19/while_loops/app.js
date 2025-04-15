// while loops
let cnt = 0;
while (cnt < 10) {
    console.log(cnt);
    cnt++;
}

// example of while loop 1
// while(!gameover) {
//     // player 1 move
//     // player 2 move
// }

// example of while loop 2
// const SECRET = 'BabyHippo';
// let userInput = prompt('Enter the CODE!');
// while (userInput !== SECRET) {
//     userInput = prompt('Enter the CODE!');
// }
// console.log('Congrats!!!');


// break: typically used with while
let input = prompt("SAY IT");
while (true) {
    input = prompt(input);
    if (input.toUpperCase() === "STOP") {
        break;
    }
}
console.log("YOU WIN.. FOR NOW..");

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) {
        break;
    }

}
