const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Crirar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
 * NoSql: MongoDB, CouchDB, etc
 * 
 * Driver: Select * from 
 * 
 */







