var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM persons", (err, results, fields)=>{
        res.send(results);
    })
    //res.send('respond with a resource from PERSONS');
});

//VAI BUSCAR IDS DEFINIDOS EM SQL
router.get('/:id', function(req, res, next) {
    connection.query('SELECT * FROM `persons` WHERE `id` = ?', [req.params.id], (err, results, fields)=>{
        res.send(results);
    })
  
});

//Elimina o utilizador escolhido
router.delete('/:id', function(req, res, next) {
    connection.query('DELETE FROM `persons` WHERE `id` = ?', [req.params.id], (err, results, fields)=>{
        res.send(results);
    })
  
});

// Mostra todos os detalhes de uma pessoa atraves do ID
router.get('/:id', function(req, res, next) {
    connection.query('SELECT * FROM `persons` WHERE `id` = ?'[req.params.id], (err, results, fields)=>{
        res.send(results);
    })
    //res.send('respond with a resource from PERSONS');
});

// Mostra todos os detalhes de uma pessoa atraves do ID
router.get('/:age/:profession', function(req, res, next) {
    connection.query('SELECT * FROM `persons` WHERE `age` = ? AND `profession` = ? ', [req.params.age, req.params.profession],(err, results, fields)=>{
        res.send(results);
    })
    //res.send('respond with a resource from PERSONS');
});

//Create new person
router.post('/', function(req, res, next) {
    var person = req.body;
    connection.query('INSERT INTO persons SET ?', [person], (err, results, fields)=>{
        res.send(results);
    })
  
});

router.put('/:id', function(req, res, next) {
    var person = req.body;
    connection.query('UPDATE persons SET ? WHERE id = ?', [person, req.params.id], (err, results, fields)=>{
        if (err) {
            res.status(500).end("Error while perfoming query");
        } else if(results.affectedRows == 0) {
            res.status(404).end("ID not found.");
        }
        else{
            res.send(results);
        }
    })
  
});

router.post

// //request person through age
// router.get('/:age', function(req, res, next) {
//     connection.query('SELECT * FROM `persons` WHERE `age` = ?', [req.params.age], (err, results, fields)=>{
//         res.send(results);
//     })
//     //res.send('respond with a resource from PERSONS');
// });


module.exports = router;
