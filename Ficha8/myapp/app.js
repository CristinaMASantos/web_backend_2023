var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// SWAGGER
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//cria variavel
var personsRouter = require('./routes/persons');

// SWAGGER
const options = {
  swaggerDefinition: {
      info: {
          version:"1.0.0",
          title:"Ficha 7 API",
          description:"Ficha 7 API Information",
          contact: {
              name:"TPSI-DWB"
          },
          servers: ["http://localhost:3000"],
      },
      definitions: {
          "Person": {
              "type":"object",
              "properties": {
                  "id": {
                      "type":"integer",                 
                      "x-primary-key":true
                  },
                  "firstname": {
                      "type":"string"                        
                  },
                  "lastname": {
                      "type":"string"                        
                  },
                  "profession": {
                      "type":"string"                        
                  },                 
                  "age": {
                      "type":"integer",
                      "format":"int64"
                  }
              },
              "xml": {
                  "name":"Person"
              }
          }
      }
  },
  apis: ["./routes/*.js"]
};
// APP INIT
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Midlewares

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//ex
app.use('/persons', personsRouter);

// SWAGGER
const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
