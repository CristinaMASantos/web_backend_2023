function Person(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullname = function(){
        return this.firstName + " " + this.lastName;
    }
}

Person.prototype.greet = function(){ // ao criar com o prototype, ele nao faz uma copia desnecessaria da propria classe Person
    console.log("Hello " + this.fullname() + ", com idade " + this.age);
}

Person.prototype.age = 0; // Prototype = heranca 

module.exports = Person;


