let userInput = prompt('Enter Option');
const todoList = [];

while (true) {

    if (userInput === 'new') {
        newTodo = prompt('Enter a Todo')
        todoList.push(newTodo);
        console.log(`${newTodo} added to list`);
        userInput = prompt('Enter Option');
    }
    else if (userInput === 'list') {
        console.log('***********');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('**********');
        userInput = prompt('Enter Option')
    }
    else if (userInput === 'delete') {
        index = parseInt(prompt('Enter the index of the list to be deleted'));
        if (!Number.isNaN(index)) {
            todoList.splice(index, 1);
            console.log('***********');
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}: ${todoList[i]}`);
            }
            console.log('**********');
            userInput = prompt('Enter Option')
        }
        else {
            console.log('Invalid Index, exiting delete mode');
            userInput = prompt('Enter Option');
        }
    }
    else if (userInput === 'quit') {
        console.log('Good Bye');
        break;
    }
}