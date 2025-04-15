let maxInput = parseInt(prompt("Enter a MAX number between 10 ~ 100!"));
while (!maxInput) {
    maxInput = parseInt(prompt("Enter a VALID MAX number between 1 ~ 100!"));
}

let userInput = parseInt(prompt("Enter a number between 1 ~ 100!"));
while (!userInput) {
    userInput = parseInt(prompt("Enter a VALID number between 1 ~ 100!"));
}

const magicNumber = Math.floor(Math.random() * maxInput) + 1;
let cnt = 1;
function game(userInput) {
    while (true) {
        if (parseInt(userInput) > magicNumber) {
            userInput = prompt("Wrong! Try guessing a samller number");
            cnt++;
        }
        else if (parseInt(userInput) < magicNumber) {
            userInput = prompt("Wrong! Try guessing a larger number");
            cnt++
        }
        else if (userInput === 'quit') {
            console.log('Game Over...');
            break;
        }
        else {
            console.log(`Congratulations! You guess the number right using ${cnt} guesses!!!`);
            break;
        }
    }
}
game(userInput);

// while(userInput !== magicNumber) will also work!