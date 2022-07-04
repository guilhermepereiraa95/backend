const express = require('express');

const Middleware = require('./middleware/Middleware');
const PedidoProdutoController = require('./controllers/PedidoProdutoController');
const PedidosController = require('./controllers/PedidosController');
const ProdutosController = require('./controllers/ProdutosController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.login);
routes.post('/session', SessionController.create);
routes.put('/session/:id', SessionController.update);
routes.delete('/session/:id', SessionController.delete);

routes.get('/pedidos', 
Middleware.checkAuth, 
PedidosController.index);

routes.post('/pedidos', PedidosController.create);
routes.put('/pedidos/:id', PedidosController.update);
routes.get('/pedidos/:id', PedidosController.show);

routes.get('/pedido-produto/:id', PedidoProdutoController.show);
routes.get('/produtos',  
Middleware.checkAuth,
ProdutosController.index);
routes.post('/produtos',  ProdutosController.create);
routes.get('/produtos/:id', ProdutosController.show);
routes.put('/produtos/:id', ProdutosController.update);
routes.delete('/produtos/:id', ProdutosController.delete);

module.exports = routes;
