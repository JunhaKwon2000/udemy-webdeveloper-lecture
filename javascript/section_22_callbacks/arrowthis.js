const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}

// this: behvaes differently in how the functions are stated
// person.fullName(): "this" refers to whatever comes before .
// fullName: () => `${this.firstName} ${this.lastName}` : "this" refers to the scope where the function was created, in this case, the window

// for shoutName, since we used the setTimeout function,
// we should use => since it refers to the same "this" for the function "shoutName"