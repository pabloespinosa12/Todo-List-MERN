const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controller/todo.controller');

//Get all todos in database
todoRouter.route('/').get(todoController.getTodos);

//Get todo in dabase with id ':id'
todoRouter.route('/:id').get(todoController.getTodoById);

//Create a new todo
todoRouter.route('/addTodo').post(todoController.createTodo);

//Update the todo in dabase with id ':id'
todoRouter.route('/updateTodo/:id').post(todoController.updateTodo);

module.exports = todoRouter;