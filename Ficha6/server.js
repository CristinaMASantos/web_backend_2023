const express = require('express');
var fs = require('fs');
const app = express();
const port = 3000;

//middleware que converte o body para json string, tudo o que e recebido no body e convertido para JSON
app.use(express.json()); 
app.use(writeLog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function writeLog(req, res, next) {
  var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n";
  fs.appendFileSync("log.txt", log);
  next();
}

app.get('/', (req, res) => {
  const body = "Hello World";
  res.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  });
  res.end(body);
})

app.get('/teste', (req, res) => {
  const body = "<h1>This is a Heading</h1><p>This is a paragraph.</p>";
  res.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(body),
    'Content-Type': 'text/html'
});
  res.end(body);
})


app.get('/teste1', (req, res) => {
  const body = fs.readFileSync('index.html');
  res.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(body),
    'Content-Type': 'text/html'
});
  res.end(body);
})

app.get('/teste2/:name', (req, res) => { // :busca uma certa variavel e atraves dela mostra um resultado
  var name = req.params.name; //buscar a variavel acima
  var body = fs.readFileSync("index.html", "utf-8");
  body = body.replace("{name}", name);
  res.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(body),
    'Content-Type': 'text/html'
  });
  res.end(body);
})

app.get('/teste3/:name', (req, res) => { //ex 5, :busca uma certa variavel e atraves dela mostra um resultado
  var date = new Date();
  var name = req.params.name; //buscar a variavel acima
  var body = fs.readFileSync("index.html", "utf-8");
  body = body.replace("{name}", name);
  body = body.replace("{date}", date.toDateString());
  res.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(body),
    'Content-Type': 'text/html'
  });
  res.end(body);
})

app.get('/teste4', (req, res) => { //ex 6
  writeLog(req);
  const body = "Hello World"
  res.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  });
  res.end(body);
})

fs.appendFileSync("log.txt", "SERVER STARTED /n");

app.get('/log', (req, res) => {
  var text = fs.readFileSync("log.txt", "utf-8");
  res.send(text); 
})

app.get('/log.txt', (req, res) => {
   res.download("log.txt", (err)=>{
    if (err) {
      res.status(404).send("File not found");
    }
   });
})

app.delete('/log.txt', (req, res) => {
    fs.unlinkSync("log.txt", (err) => {
      if (err) {
        res.status(304).end("File not found");
        return
      }
    });
});