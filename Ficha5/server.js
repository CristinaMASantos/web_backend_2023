// in person.json existem 4 propriedades em que cada uma e um objeto
const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');

//middleware que converte o body para json string, tudo o que e recebido no body e convertido para JSON
app.use(express.json()); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function readFile(path) {
  var content = fs.readFileSync(path);
  return JSON.parse(content);
}

var content = readFile('./persons.json')
console.log(content);

function writeFile(path, data) {
  fs.writeFileSync(path, data);
}

// FICHA 5 - TABELA 1 DE METODOS A IMPLEMENTAR

app.get('/users', (req, res) => {
  res.send(content); //- so invocado para o caminho que mandamos, neste caso "localhost:3000/users"
})

/* FEITO NO POST EM BAIXO
app.post('/users', (req, res) => { 
  res.send(req.body.firstname);  //sem o middleware nao conseguimos utilizar o "req.body"

})
*/


app.get('/users/:id', (req, res) => { //atraves do id introduzido no postman
  var id = req.params.id; //request param ('/users/:id') in this case ID
  var person = content["person" + id]; // gets the person from the id requested
  writeFile('./persons.json', JSON.stringify(content));
  res.send(person); // shows the person requested
})


app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = content["person" + id];
  if (person == undefined) {
      res.send("Undefined")
  } else {
      delete content["person" + id];
      writeFile('./persons.json', JSON.stringify(content));
      res.send("ID not found" + id);
  } 
})

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = content["person" + id];
  if (person == undefined) {
      res.send("Undefined")
  } else {
      content["person" + id] = req.body; //troca os valores pelo do body
      content["person" + id].id = id; //o body nao tem id, ou seja, criamos a propriedade no objeto e depois buscamos o id dos parametros
      writeFile('./persons.json', JSON.stringify(content));
      res.send(content["person" + id]);
    } 
})
/* ONLY CHANGES AGE
app.put('/users/age/:id', (req, res) => {
  var id = req.params.id;
  var person = content["person" + id];
  if (person == undefined) {
      res.send("Undefined")
  } else {
      content["person" + id].age = req.body.age; //troca os valores pelo do body
  } 
})

- MOST EFFICIENT WAY

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = content["person" + id];
  if (person == undefined) {
      res.Status(404).send("Undefined");
  } else {
      Object.keys(req.body).forEach(key=>{
        content["person" + id][key] = req.body[key];
      }) 
      writeFile('./persons.json', JSON.stringify(content));
      res.send(content["person" + id]);
    } 
})
*/
app.post('/users', (req, res) => { 
  if (Object.keys(req.body).length == 0) {
    res.status(418).send("The server refuses the attempt to brew coffee with a teapot.");
  }else{
    var person = req.body;
  var size = Object.keys(content).length; //verifica a quantidade de keys no objeto(persons - propriedade) nd
  var id = size + 1; //id criado depois do person ter sido criado, sem o mesmo - adiciona o id dinamicamente 
  person.id = id;
  content["person" + id] = person; //de maneira dinamica, ira ser adicionado um id ao person criado a partir do 5.
  writeFile('./persons.json', JSON.stringify(content));
  res.send("ID " + id); //so conseguimos aceder ao "id" se adicionarmos algo
  }
})
/*
app.post('/users', (req, res) => { 
  var person = req.body;
  var size = Object.keys(content).length; //verifica a quantidade de keys no objeto(persons - propriedade) nd
  var id = size + 1; //id criado depois do person ter sido criado, sem o mesmo - adiciona o id dinamicamente 
  person.id = id;
  content["person" + id] = person; //de maneira dinamica, ira ser adicionado um id ao person criado a partir do 5.
  writeFile('./persons.json', JSON.stringify(content));
  res.send("ID " + id); //so conseguimos aceder ao "id" se adicionarmos algo

})
*/
