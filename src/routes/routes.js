const express = require('express');

const routes = express.Router();

const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');

routes.get('/', (req, res) => { 
    return res.send('Teste');
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);

module.exports = routes;