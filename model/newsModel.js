/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE NEWS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/
const news = connection.define(
    'tbl_news',
    {
        categoria:{
            type: sequelize.STRING(45),
            allowNull: false
        },
        assunto: {
            type: sequelize.STRING(45),
            allowNull: false
        },
        Autor: {
            type:sequelize.STRING(45),
            allowNull:false
        }
    }
);

//news.sync({force:true});

module.exports = news;