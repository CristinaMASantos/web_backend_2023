const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//middleware que converte o body para json string, tudo o que e recebido no body e convertido para JSON
app.use(express.json());

const sequelize = new Sequelize('ficha9', 'root', '' ,  {
    dialect: 'mysql'
});

sequelize.authenticate().then ( () => {
    console.log('Connection has been established');
}).catch (err => {
    console.error('Unable to connect', err);
})


const Person = sequelize.define('person', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    profession:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    age:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
/*
Person.bulkCreate([
    {firstName: 'João', lastName: 'Ferreira', profession: 'Programador', age: 35},
    {firstName: 'Pedro', lastName: 'Nunes', profession: 'Professor', age: 34},
    {firstName: 'Tiago', lastName: 'Pereira', profession: 'Fotografo', age: 24},
    {firstName: 'Luis', lastName: 'Silva', profession: 'Cozinheiro', age: 58},
    {firstName: 'Maria', lastName: 'Santos', profession: 'Modelo', age: 20},
]).then(function () {
    return Person.findAll();
}).then(function (person) {
    console.log(person);
});


sequelize.sync({ force: false }).then( () => {
    console.log('Database & tables created!');
}).then(function () {
    return Person.findAll();
}).then(function (person) {
    console.log(person);
});
*/

//5 - A
app.get('/persons', (req, res) => {
    Person.findAll().then(person => {
        res.send(person);
    })
});

//5 - B
app.post('/NewPerson', (req, res) => { //creating is alwyas post
    var details = req.body;
    Person.create(details).then(newPerson=>{
        res.send(newPerson);    
    })
});

//5 - C
app.delete('/DeletePersons', function(req, res, next) {
    Person.destroy({
        where:{ id: req.body.id }
    }).then(() => {
        res.send('Person deleted');
    })
});

//5 - D
app.delete('/deletePersons/:id', function(req, res, next) {
    Person.destroy({
        where:{ id: req.params.id }
    }).then(() => {
        res.send('Person deleted ' + [req.params.id]);
    })
});

//5 - E
app.get('/findPersons', function(req, res, next) {
   if (req.query.id == undefined){
        Person.findAll().then(person => {
            res.send(person); 
        })
    } else {
        Person.findByPk(req.query.id).then(person => {
        res.send(person); 
    })
   }
});

//5 - F
app.get('/findPersonsBy/:age/:profession', function(req, res, next) {
    Person.findOne({
        where:{
            age: req.params.age,
            profession: [req.params.profession]
        }
    }).then(getPerson=>{
        res.send(getPerson);    
    })
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

