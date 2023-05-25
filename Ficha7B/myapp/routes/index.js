var express = require('express');
var router = express.Router();

/* GET home page.  um endpoint para frontend*/ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //desenhar pagina html uma view se criar pasta test.pug dps mudo index para test
  //Devolve  view primeiro argumento nome da view e segundo dados que queremos enviar para view
});

module.exports = router;
