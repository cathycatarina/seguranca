const express = require('express');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();


/* ROTA DE SELEÇÃO DE NEWS(GET)*/
router.get('/news/selecionar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})
/* ROTA DE INSERÇÃO DE NEWS(POST)*/
router.post('/news/inserir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');
})


/* ROTA DE ALTERAÇÃO DE NEWS(PUT)*/
router.put('/news/alterar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE NEWS(DELETE)*/
router.delete('/news/deletar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;
