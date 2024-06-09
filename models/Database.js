const Sequelize = require('sequelize');


// CONEXÃO COM BANCO DE DADOS
const sequelize = new Sequelize('postapp','root','root',{
    host: 'localhost',
    dialect:'mysql'
})


module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}