/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICACAO A MANIPULAR JSON*/
app.use(express.json());

/*TESTE DE ROTA HTTP GET
1 - NOME DA ROTA
2 - CALLBACK QUE EXECUTA A ACAO DA ROTA
*/

app.get('testeGet', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE HTTP GET');
});

/*CRIACAO DO SERVIDOR HTTP:
1 - PORTA LOGICA
2 - CALLBACK
*/

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http:localhost:3000')

});