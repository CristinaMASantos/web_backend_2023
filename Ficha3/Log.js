var log = { // variavel criada com varias funcoes
            info: function (info) {
                console.log('Info: '+ info);
            },
            warning:function (warning) {
                 console.log('Warning: '+ warning);    
            },
            error:function (error) {
                console.log('Error: '+ error);
            }
};
module.exports = log // exporta a variavel log