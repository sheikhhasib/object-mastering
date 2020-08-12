const Person = {
    fname : 'hasib',
    lname : 'sheikh',
    salary : 15000,
    getFullName : function(){
        return this.fname + this.lname;
    },
    chargeBill : function(amount,tips,tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    fname : 'hero',
    lname : 'kalam',
    salary : 25000,
}
const goodPerson = {
    fname : 'kolim',
    lname : 'uddin',
    salary : 25000,
}

// console.log(Person.chargeBill(1200));
// const heroChargeBill = Person.chargeBill.bind(heroPerson);

// heroChargeBill(200);
// heroChargeBill(200);
// console.log(heroPerson.salary);

///call 
// Person.chargeBill.call(heroPerson,500,100,10);
// Person.chargeBill.call(goodPerson,1500,50,10);
// console.log("good person : ",goodPerson.salary);
// console.log("hero person : ",heroPerson.salary);
// console.log("person : ",Person.salary);


Person.chargeBill.apply(heroPerson ,[1200,20,10]);
console.log(heroPerson.salary);