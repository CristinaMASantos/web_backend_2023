module.exports = {  // exporta todas as funcoes aqui feitas, noutro ficheiro e feito o require da mesma, conseguindo utilizar as funcoes
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    maximum: function (array) {
        var max = array[0];
        for (i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;3
    },

    minimum: function (array) {
        var min = array[0];
        for (i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    },

    average : function (array) {
        var soma = 0;
        for (let i = 0; i < array.length; i++){
            soma += array[i];
    }
    var media_notas = soma / array.length;
    return media_notas;
    },

    indexOf : function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if(array[i] == value) {
                return i; // returns true
            }   
        }
        return -1; // returns false
    },

    subArray : function(array, startindex, endindex) {
        var sub = [];
        for(let i = startindex; i <= endindex; i++) {
            sub.push(array[i]);
        }
        return sub;
    },

    swapArray : function(array, i1, i2) { 
        var temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;
        return array;
    },

    containArray : function(array, value) {
       return this.indexOf(array, value) != -1; // only returns true or false 
    },

    concatnateArray : function(array, array1) {  //changes the value of the array if not created a third variable(in this case the arrayConcatnate)
        var arrayConcatnate = [];
        arrayConcatnate = array;
        for(let i = 0; i < array1.length; i++) {
            arrayConcatnate.push(array1[i]);
        }
        return arrayConcatnate;
     }
};

