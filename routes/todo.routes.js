const Router = require('express');
const todoController = require('../controller/todo.controller');

const router = new Router();

router.post('/todo', todoController.createTodo);
router.get('/todo', todoController.getAllTodos);
router.get('/todo/:id', todoController.getOneTodo);
router.put('/todo', todoController.updateTodo);
router.delete('/todo/:id', todoController.deleteTodo);


module.exports = router;

