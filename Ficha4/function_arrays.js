var array = [];
/*
array.push(10);
array.push("Hello"); //inserir dentro do array uma string
array.push({}); //inserir dentro do array um objeto array
array.push({name: "Test"}); // inserir dentro do array um objeto com a propriedade "nome"
*/
array.push(fn, value =>{  // funcao sem parametros e uma funcao anonima -- MANEIRA ABREVIADA
    //console.log("Hello world 1");
    console.log("Hello world 1" + value);
});

array.push(function(){  // funcao sem parametros e uma funcao anonima
    console.log("Hello world 2");
});

array.push(function(){  // funcao sem parametros e uma funcao anonima
    console.log("Hello world 3");
});

for (let i = 0; i < array.length; i++) {
    var element = array[i](i + 1) ;
    element();
    //array[i]();   //array[i] - array, array[i]() - chamar as funcoes dentro dele (so funciona se o array so tiver funcoes dentro dele)
}

array.forEach(element => { //utilizado se nao for necessario manipular partes especificas de um ciclo
    element(); // ou seja, o array pois - L21
});

var index = 1;
array.forEach(element => {
    element(index);
    index++;
})