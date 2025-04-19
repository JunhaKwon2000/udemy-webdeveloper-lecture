function callTwice(func) {
    func();
    func();
}

function print() {
    console.log('Hello!');
}

callTwice(print);

function mystery() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('Good');
        }
    } else {
        return function () {
            console.log('Happy');
        }
    }
}
const mys = mystery();
mys();

function mBF(min, max) {
    return function (num) {
        if (num >= min && num <= max) {
            console.log('between');
        }
        else {
            console.log('not-between');
        }
    }
}
const ff = mBF(150, 200);
ff(180);

// You don't need to use function when creating methods
const cat = {
    name: 'Whiskers',
    age: 3,
    meow() {
        console.log('Meow~');
    }
}
cat.meow();

// try & catch: executing the below codes when there could be something wrong with our code 
try {
    hello.toUpperCase();
} catch {
    console.log('Error');
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (error) {
        // console.log(error);
        console.log('String plz');

    }
}
yell(3);