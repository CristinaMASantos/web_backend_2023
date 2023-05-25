const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');
const BooksDataModel = require('./models/Books');
const LoansDataModel = require('./models/Loans');
//initialize data base
const sequelize = new Sequelize('ficha10', 'root', '' ,  {
    dialect: 'mysql'
});

const Users = UserDataModel(sequelize, DataTypes);
const Books = BooksDataModel(sequelize, DataTypes);
const Loans = LoansDataModel(sequelize, DataTypes);

//Define Relations between tables
Users.hasMany(Loans);
Loans.belongsTo(Users);

Books.hasMany(Loans, {onDelete: 'CASCADE'});
Loans.belongsTo(Books);


sequelize.authenticate().then ( () => {
    console.log('Connection has been established');
}).catch (err => {
    console.error('Unable to connect', err);
})

sequelize.sync({ force: false }).then( () => {
    console.log('Database & tables created!');
}).then(function () {
    return Users.findAll();
});
module.exports = {
    Users, Books, Loans
}


Books.bulkCreate([
    {title: 'Sonhos', author_name: 'Pedro Dias', genre: 'drama', available_copies: 35},
    {title: 'Dias', author_name: 'Tiago Ferreira', genre: 'adventure', available_copies: 21},
    {title: 'Vida', author_name: 'Jose Camacho', genre: 'romance', available_copies: 120},
    {title: 'Programmer Life', author_name: 'Diana Santos', genre: 'technology', available_copies: 73},
    {title: 'The Game', author_name: 'Francisco Migue;', genre: 'games', available_copies: 50},
]).then(function () {
    return Books.findAll();
});

