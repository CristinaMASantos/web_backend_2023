/*
class Emitter {
    constructor(){
        this.events = {prop: [], test: {}, login: [], logout: [], ban: []}; // objeto vazio, prop com valor de array vazio, test com valor de objeto vazio
        // Maneiras diferentes de criar propriedades numa class
        this.events.login = [];
        events["logout"] = [];

        events[login].push(2); // adicionar o valor de 2 a propriedade login

        var n = "ban";
        events[n] = [];
        // Maneiras diferentes de criar propriedades numa class 
        var x = events.prop; //Maneira 1 de chamar
        var z = events.test; // chamar propriedade
        var y = events.foo; // undefined pois nao tem valor associado

        var name = "prop";
        var w = events["name"]; //atribuit a var W, o valor da propriedade // Maneira 2 de chamar
    }
}
*/
class Emitter {
    constructor(){
        this.events = {}; 
    }
}

Emitter.prototype.on = function(type, listener){
    if(this.events[type] == undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type] != undefined){
        this.events[type].forEach(listener => { // Ficha 4 - ex 5 linha D
            listener();
        });
    }
}


module.exports = Emitter; 

