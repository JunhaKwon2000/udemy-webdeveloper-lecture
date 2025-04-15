// loop: structure is same as java
const arr = ["Junha", "Jake", "Merab", "Volka", "Paddy"];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// printing even numbers(till 20)
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// counting down by 10 from 100 to 0
for (let i = 100; i >= 0; i--) {
    if (i % 10 === 0) {
        console.log(i);
    }
}

// infinite loops: avoid it!!
// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }

// array loops
const animals = ['lions', 'rhino', 'crocodile', 'tigers']
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    console.log(i + ', ' + element);
}
// reverse
for (let i = animals.length - 1; i >= 0; i--) {
    const element = animals[i].toUpperCase();
    console.log(i + ', ' + element);
}

// nested loops
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        let value = i * j;
        console.log(`${i} X ${j} = ${value}`);
    }
}
const seatingChart = [
    ['Karen', 'Jake', 'Stacy'],
    ['Max', 'Volka', 'Luke'],
    ['Junha', 'Chris', 'Paul'],
]
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW:${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
}