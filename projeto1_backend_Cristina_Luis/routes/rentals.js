var express = require('express');
var mysql = require('mysql');
var router = express.Router();


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto1_backend'
});

/* PARTE B  EX - E */
/* Listar todos os alugueres ordenados por ordem crescente de preço e devolver a lista ordenada na
resposta. A ordenação terá que ser efetuada em Javascript. */
router.get('/price', function(req, res, next) {
  connection.query('SELECT * FROM `rentals`', [req.params.price], (err, results, fields)=>{
    if (err) {
      console.log(err);
      res.status(500).send('Error connecting to the server');
    } else { 
      const sortedResults = results.sort((a, b) => a.price - b.price);
      res.status(200).json(sortedResults);
    }
  })
});

/* PARTE A */
/*A - Listar todos os alugueres existentes na tabela e devolver na resposta */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM rentals", (err, results, fields)=>{
        res.send(results);
    })
});

/* PARTE A */
/*B - Adicionar um novo aluguer à base de dados. Deverá ser enviada uma mensagem de sucesso na
resposta indicando o ID do aluguer adicionado */
router.post('/', function(req, res, next) {
    const rental = req.body; //verificacao do body
    connection.query('INSERT INTO rentals SET ?', [rental], (err, results, fields)=>{
      if (err) {
        console.log(err);
        res.status(500).end('Error connecting to the server');
      } else if(results.affectedRows == 0) {
        res.status(404).end("Rentals ID not found.");
    }
    else{
        console.log(results.insertId);
        res.status(200).send('Rental inserted with sucess. Rental ID: ' + results.insertId);
      }
    });
});

/* PARTE A */
/*C - Selecionar todos os alugueres de um determinado cliente e devolver essa lista na resposta.*/
router.get('/customer/:customer', function(req, res, next) {
    connection.query('SELECT * FROM `rentals` WHERE `customer` = ?', [req.params.customer], (err, results, fields)=>{
        res.send(results);
    })
});

/* PARTE A */
/*D - Aplicar um desconto em percentagem no preço de um aluguer (via params) e atualizar a entrada. 
Devolver a entrada atualizada na resposta.*/
router.get('/discount/:id/:discount', function(req, res, next) {
  const discount = req.params.discount;
    connection.query("UPDATE rentals SET price = price - (price * (?/100)) WHERE id = ?", [discount, req.params.id], (err, results, fields)=>{
      if (err) {
        console.log(err);
        res.status(500).end('Error connecting to the server');
      }else if(results.affectedRows == 0) {
        res.status(404).end('Rentals ID not found : ' + [req.params.id]);
      }else{
        console.log(results);
        res.status(200).send('Rentals ID : ' + [req.params.id] + 'had a discount perfomed in his price');
      } //verificacao discount
    });
});

/* PARTE A */
/*E - Listar todos os alugueres anteriores a uma determinada data (via body) e devolver a lista na
resposta. */
router.post('/before', function(req, res, next){
    const date = req.body.pickup_date;
    connection.query("SELECT * FROM rentals WHERE pickup_date < ?", date, (err, results, fields)=>{
        if (err) {
            res.status(500).end('Error connecting to the server');
        }
        else{
            console.log(results);
            res.send(results);
        }   
    })
});

/* PARTE B */
/*A - Selecionar apenas um aluguer pelo seu ID (via params) e devolver o mesmo na resposta. */
router.get('/ID/:id', function(req, res, next) {
    connection.query('SELECT * FROM `rentals` WHERE `id` = ?', [req.params.id], (err, results, fields)=>{
        res.send(results);
    }) // FAZER COM QUERY EM VEZ DE PARAMS, VEREFICATION ALREADY ON THE POSTMAN
});

/* PARTE B */
/*B - Apagar um aluguer existente (via query) e atualizar a tabela, indicar mensagem de erro se o ID do
aluguer a apagar não existir ou mensagem de sucesso caso seja apagado. */
router.delete('/', function(req, res, next) {
    connection.query('DELETE FROM `rentals` WHERE `id` = ?', [req.query.id], (err, results, fields)=>{
        if (err) {
            console.log(err);
            res.status(500).end('Error connecting to the server');
          } else if(results.affectedRows == 0) {
            res.status(404).end('Rentals ID not found : ' + [req.params.id]);
        }
        else{
            console.log(results.insertId);
            res.status(200).send('Rental deleted with sucess. Rental ID: ' + [req.params.id]);
          }
        });
  
});

/* PARTE B */
/*C - Selecionar todos os alugueres de uma determinada localização de entrega do carro e devolver
essa lista na resposta */
router.get('/location/:return_location', function(req, res, next) {
    connection.query('SELECT * FROM `rentals` WHERE `return_location` = ?', [req.params.return_location], (err, results, fields)=>{
        res.send(results);
    })
});

/* PARTE B */
/*D - Adicionar um comentário a um determinado aluguer (mantendo os anteriores) pelo seu ID e 
atualizar a tabela. Devolver a entrada atualizada na resposta. */
router.put('/comment/:id', function(req, res, next) {
  const newComment = req.body.comments;
  connection.query("UPDATE rentals SET comments = CONCAT(comments, ', ', ?) WHERE id = ?", [ , req.params.id], (err, results, fields)=>{
    if (err) {
      console.log(err);
      res.status(500).end('Error connecting to the server');
    }else if(results.affectedRows == 0) {
      res.status(404).end('Rentals ID not found : ' + [req.params.id]);
    }else{
      console.log(results.insertId);
      res.status(200).send('Rental ID: ' + [req.params.id] + ' ,Comment: ' + newComment);
    }
  });
});

module.exports = router;


