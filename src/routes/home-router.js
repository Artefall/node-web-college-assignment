const express = require('express');
const homeRouter = express.Router();
const homeContorller = require('../controllers/home-controller');

homeRouter.get('/', homeContorller.welcome);
homeRouter.get('/add', homeContorller.add);
homeRouter.get('/update', homeContorller.update);
homeRouter.get('/delete', homeContorller.delete);

homeRouter.post('/add', homeContorller.addPost);
homeRouter.post('/update', homeContorller.updatePost);
homeRouter.post('/delete', homeContorller.deletePost);


module.exports = homeRouter;