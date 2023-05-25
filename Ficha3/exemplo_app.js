var myLogModule = require('./Log'); // utiliza o que esta feito no ficheiro Log.js
myLogModule.info('Node.js started'); // ".info" e umaa funcao criada no Log.js - o texto 'Node.js started' ira aparecer na funcao

var person = require('./Person.js'); //funcao criada no Person.js
var person1 = new person('James', 'Bond'); //ao utilizarmos o require na linha acima, conseguimos criar uma pessoa nova neste ficheiro
var person2 = new person('Lebron', 'James');
console.log(person1.fullName()); //funcao criada no Person.Js - Juncao do Primeiro e ultimo nome
console.log(person2.fullName()); //funcao criada no Person.Js - Juncao do Primeiro e ultimo nome