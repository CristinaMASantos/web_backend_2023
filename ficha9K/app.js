//dados para usar para server http////////////////////////////////////////////////
const express = require('express');                 ////     
const Sequelize = require('sequelize')              ////
var router = express.Router();                      ////
const app = express();                              ////
const port = 3000;

const swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger-output.json');

app.use(express.json());

//falta o app.listen que esta la em baixo
////////////////////////////////////////////////////////////////////////////////////////////////


const sequelize = new Sequelize('ficha9', 'root', '12345678', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
});

const Person = sequelize.define('user',{
    //atributos
    firstname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname:{
        type: Sequelize.STRING
        //allowNull defaults to true
    },
    profession:{
        type: Sequelize.STRING
        //allowNull defaults to true
    },
    age:{
        type: Sequelize.INTEGER
        //allowNull defaults to true
    }
}, {
    //options
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Data & tables criada');
        }).then(function(){
            //return Person.findAll();
        }).then(function () {
            console.log();
        });

/*
Person.bulkCreate([
    { firstname: 'Pedro', lastname: 'Jardim', profession: 'IT', age:62 },
    { firstname: 'Manuel', lastname: 'Matos', profession: 'IT', age:12 },
    { firstname: 'Maria', lastname: 'Figueira', profession: 'IT', age:32 },
    { firstname: 'Ana', lastname: 'Duarte', profession: 'IT', age:82 },
    { firstname: 'Luís', lastname: 'Faria', profession: 'IT', age:42 },
    ]).then(function (){
        return Person.findAll();
    }).then(function (persons){
        console.log(persons);
});
*/


//5.A
//pesquisar todos os persons
app.get('/persons', function(req, res, next) {
    Person.findAll().then(results=>{
        res.send(results);    
    })
});


//5.B
app.post('/add_persons', function(req, res, next) {
    var details = req.body;
    Person.create(details).then(newPerson=>{
        res.send(newPerson);    
    })
});


//5.C
app.delete('/delete_persons', function(req, res, next) {
    var idReceived = req.body.id;
    Person.destroy({
        where:{
            id: idReceived
        }
    }).then(deletedPerson=>{
        res.send(deletedPerson);    
    })
});

//5.D
app.delete('/delete_persons/:id', function(req, res, next) {
    var idReceived = req.params.id;
    Person.destroy({
        where:{
            id: idReceived
        }
    }).then(deletedPerson=>{
        res.send(deletedPerson);    
    })
});


//5.E
app.get('/encontrar_persons', function(req, res, next) {
    var idReceived = req.query("SELECT * FROM users WHERE id =1", idReceived, (err, results, fields)=>{
    Person.findAll({
        where:{
            id: idReceived
        }
    }).then(foundPerson=>{
        res.send(foundPerson);
    })})
});


/*
//5.F
app.get('/persons_age_profession/', function(req, res, next) {
    Person.findAll({
        where:{
            name: Manuel,
            profession: IT
        }
    }).then(getPerson=>{
        res.send(getPerson);    
    })
});
*/






////////////////////////////////////////////////////////
app.listen(port, () => {                            ////
    console.log("server is running")                ////
});                                                 ////
//é preciso usar para criar server http/////////////////


