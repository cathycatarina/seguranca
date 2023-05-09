/*IMPORTAÇÃO DO SEQUELIZE - para importá-lo, primeiro precisa instalar com npm install sequelize*/
const sequelize = require ('sequelize');

/*

CRIAÇÃO DA CONEXÃO COM O BANCO DE DADOS
PARÂMETROS:
1 - NOME DO BANCO
2 - USUÁRIO
3 - SENHA
4 - OBJETO JSON QUE DETERMINA AS CONFIGURAÇOES :
    4.1 - HOST DO BANCO
    4.2 - PORTA LÓGICA
    4.3 - DIALETO SQL
    4.4 - TIMEZONE - 3
*/
const connection = new sequelize (
    'bd_seguranca',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '3'
    }
);

module.exports = connection;
    