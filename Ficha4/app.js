/*
var person = {name: "David",age: 29,gender: "M"};

var personJSON = JSON.stringify(person); //passou o objeto para string

var str = '{"name": "Ana","age": 29,"gender": "F"}';

var personObj = JSON.parse(str); // converte de stringJSON para parse
*/

var Person = require("./Person");
var p1 = new Person("Pedro","Santos");

var jonh = new Person( " Jonh", "Doe");
jonh.age = 21;
jonh.greet();

var jane = new Person( " Jane", "Doe");
jane.age = 25;
jane.greet();

p1.age = 20;

console.log(p1.greet());

console.log(p1.__proto__); // aparece todos os prototypes criados com a funcao
console.log(jane.__proto__);
console.log(p1.__proto__ == jane.__proto__);// retorna verdadeiro pois as duas instancias de Person tem todos os mesmos prototypes (=== compara o tipo)

const Emitter = require("./emitter.js");
const Config = require("./config.js");

var emitter = new Emitter();

emitter.on("Login", function(){
    console.log("Login 1");
})

emitter.on("Login", function(){
    console.log("Login 2");
})

emitter.emit("Login");

emitter.on(Config.events.Login, function(){
    console.log("Login 1");
})

emitter.on(Config.events.Login, function(){
    console.log("Login 2");
})

emitter.emit(Config.events.Login);