function started(){
    console.log("Download STARTED!");
}

function update(progress){
    console.log(progress + "% COMPLETED");
}

function completed(){
    console.log("Download COMPLETED!");
}

function performDownload(function_started, function_update, function_complete){
    function_started();

    for (i = 0; i <= 100; i++) {
        function_update(i);
    }

    function_complete();
}

performDownload(started, update, completed); 

var ArrayUtils = require('./ArrayUtils.js'); //atraves do require vai buscar as funcoes feitas no ('./ArrayUtils.js')
var array = [1,2,3,4,9];
var array1 = [5,6,7,8,0];
var empty = ArrayUtils.isEmpty(array);
console.log(ArrayUtils.maximum(array));
console.log(ArrayUtils.minimum(array));
console.log(ArrayUtils.average(array));
console.log(ArrayUtils.indexOf(array, 9));
console.log(ArrayUtils.subArray(array, 1, 3));
console.log(ArrayUtils.swapArray(array, 1, 2));
console.log(ArrayUtils.containArray(array, 0)); // returns false because the value "0" doesn't exist on the array
console.log(ArrayUtils.concatnateArray(array, array1));
console.log(array);

function Person(firstName) { 
    this.firstName = firstName; 
}

Person.prototype.greet = function(){ // funciona para todas as instancias de "Person"
    return "Hello" +this.firstName;
}

var p = new Person = ('David');
var p1 = new Person = ('Ana');
var x = 0;

console.log(p.greet());
console.log(p1.greet());
