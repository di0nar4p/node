/* import {Sequelize } from "sequelize";

const sequelize = new Sequelize('sistemadecadastro','root','root',{
    host: 'localhost',
    dialect:'mysql'
})
 */


/* sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar: '+ erro)
}) */

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
       type: Sequelize.STRING 
    }
})

Postagem.create({
    titulo: "ORM é show",
    conteudo:"lorem ipsum"
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome:"Glauco",
    sobrenome:"Pereira Santos",
    idade:30,
    email:"glaucoper@gmail.com"
})
