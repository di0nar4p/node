const express = require('express');
const handlebars = require('express-handlebars');
const Post = require('./models/Post');
const app =  express();
const PORT= 8081


// CONFIGURANDO O TEMPLATE ENGINE DO EXPRESS PARA USAR O HANDLEBARS
    // LAYOUT PADRÃO MAIN
    app.engine('handlebars', handlebars.engine ({

        defaultLayout: 'main',
        
        runtimeOptions: {
    
            allowProtoPropertiesByDefault: true,
    
            allowProtoMethodsByDefault: true
    
        }
    
    }))

        app.set('view engine','handlebars')

    //EXPRESS PARSER
        app.use(express.json());
        app.use(express.urlencoded({
        extended: true
        }));




//ROTAS

    app.get('/', function(req,res){
        Post.findAll({order:[['id','DESC']]}).then(function(posts){
            
            res.render('home',{posts:posts})

        })
    })


    app.get('/cad', function(req,res){
        res.render('formulario')
    })

    app.post('/post', function(req,res){
        
        Post.create({
            titulo: req.body.titulo,
            conteudo:req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send(`Desculpe, algo deu errado ${erro}`)
        })
    })

    app.get('/del/:id',function(req,res){
        Post.destroy({where:{'id':req.params.id}})
        .then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send(`404 Not found: ${erro} `)
        })
    })


app.listen(PORT,function(){
    console.log(`Servidor online em http://localhost:${PORT}`)
})
