const person1 = {
    firstName : 'Abdul',
    secondName : 'azim',
    sirname : 'khalac',
    getFullName :function(){
        const fullname = `${this.firstName} ${this.secondName} ${this.secondName} `;
        console.log(fullname);
    },
    age:20
}
person1.getFullName();
