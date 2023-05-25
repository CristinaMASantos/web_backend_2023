
// Calculcar nota - Aprovado ou Reprovado 

function calculateGrade(gd1,gd2){
    var grade = gd1 * 0.6 + gd2 + 0.4;
    if(grade >= 9.5)
        console.log('Aprovado');
    else
        console.log('Reprovado');
}



// Calcular nota - True ou False

function calculateGrade2(gd1,gd2){
    var grade = gd1 * 0.6 + gd2 + 0.4;
    if(grade >= 9.5)
        return true;
    else
        return false;
}



var valor = 10 // global variable
calculateGrade(valor,16);

calculateGrade(12,16);
var GradeValue = calculateGrade2(12,16);
if(GradeValue)
    console.log('Aprovado');
else
    console.log('Reprovado'); // in this case it will show 'Aprovado'


console.log(GradeValue); // will return tha value true



function getMonthName(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log('Janeiro'); // if not commented it will show 'Aprovado' and 'Janeiro'
            break;
        case 2:
            console.log('Fevereiro'); 
            break;
        default:
            break;
    }
    
}

getMonthName(1);   


function getMonthName2(monthNumber){
    var months = ['Janeiro']
    if(monthNumber > 0 && monthNumber <= 12)
        console.log(months[monthNumber - 1]);   
}



function getNumb(n1,n2,op) {
    let resultado;

    switch (op) {
        case '+':
            resultado = n1 + n2;
            break;
        
        case '-':
            resultado = n1 - n2;
            break;

        case '*':
            resultado = n1 * n2;
            break;

        case '/':
            resultado = n1 / n2;
            break;

        case '^':
            resultado = Math.pow(n1,n2);
            break;

        default:
            console.log('Operador Invalido');
            return;
    }
    console.log('A soma dos valores com o operador escolhido e de', n1, op, n2,' = ', resultado);
}

getNumb(12,14,'+');
getNumb(12,14,'-');
getNumb(12,14,'*');
getNumb(12,14,'/');
getNumb(12,14,'^');


function Mult51(i) {
    for (let i = 5; i < 20; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
      }
}

function Mult52(multiplos, limite) {
    for (let i = multiplos; i < limite; i+multiplos) {
            console.log(i);
      }
}

Mult52(5, 20);



function Add(limit) {
    var soma = 0;
    for (let i = 1; i < limit; i++) {
         soma += 1;
    }
    return soma;
}

function Add2(limit) {
    return (limit / 2) * (limit + 1);
}

console.log(Add(100));
console.log(Add2(100));



function Fact(numb) {
    var factorial = 1;
    for (let i = 2; i <= numb ; i++) {
        factorial *= 1;
    }
    return factorial;
}

Fact(5);



function Minimo(array) { 
    var min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    return min;
    }
}


var array = [2, 7, 3, 0, 1];
var min = minimum(array);


function Maximo(array) { 
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    return max;
    }
}


function Media(array) { 
    var med = array[0];
    for (let i = 1; i < array.length; i++) {
        soma += array[i];
    }
    med = soma / array.length;
    return med;
}

