 class Person{
     constructor(firstname,lastname,salary){
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
     }
 }

 const heroPerson = new Person('hasib','sheikh',25000);
 console.log(heroPerson);

const friendlyPerson = new Person('santo','sheikh',25630);
console.log(friendlyPerson.salary);


function Person1(firstname,lastname,salary) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
}

const oldPerson = new Person1('kolim','shekh',2510);
console.log(oldPerson);