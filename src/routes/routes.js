const express = require('express');

const routes = express.Router();

const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');
const PostController = require('../controllers/PostController');

routes.get('/', (req, res) => { 
    return res.send('Teste');
});

routes.get('/users', UserController.findAll);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);

routes.get('/categories', CategoryController.findAll);
routes.post('/categories', CategoryController.create);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/posts', PostController.findAll);
routes.post('/posts', PostController.create);
routes.delete('/posts/:id', PostController.delete);
routes.put('/posts/:id', PostController.update);

module.exports = routes;