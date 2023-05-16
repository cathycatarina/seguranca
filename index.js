/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICACAO A MANIPULAR JSON*/
app.use(express.json());

const newsController = require('./Controller/newsController');

app.use('/', newsController);


// app.get('/testeGet', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP GET');
// });

/*app.post('/testePost', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE HTTP POST');
});*/

// app.put('/testePut', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP PUT');
// });

// app.delete('/testeDelete', (req, res)=>{
//     res.send('RESPOSTA DA ROTA DE HTTP DELETE');
// });


/*CRIACAO DO SERVIDOR HTTP:
1 - PORTA LOGICA
2 - CALLBACK
*/

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http:localhost:3000')

});