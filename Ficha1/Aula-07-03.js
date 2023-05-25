//  07/03/2023
//  Functions are first class


function foo() {
    console.log('FOO');
    foo();  // invoke a global function inside another one
}

function bar() {
    console.log('BAR');
}

var x = foo(); // doesn't return anything because in the function there is nothing being returned because it's being invoked
var x = foo; // X now is now the function
x(); // invoke the function foo

function bar1(fn) {
    console.log('BAR');
    fn();
}

bar(x); // it will show up the function bar then the function foo because X is equal to foo

//Function Expression

var greetMe = function () {
    console.log ('Hello');
}

greetMe();  
Log(greetMe); //two different ways to call a function