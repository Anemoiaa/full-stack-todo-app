const db = require('../db');

class TodoController {
    async createTodo(req, res) {
        const {title, description, status} = req.body;
        const newTodo = await db.query(
            `INSERT INTO todo (title, description, status) VALUES ($1, $2, $3) RETURNING * ;`, 
            [title, description, status]
        );
        res.json(newTodo.rows[0]);  
    }

    async getAllTodos(req, res){
        const todos = await db.query(
            `SELECT * FROM todo;`
        );
        res.json(todos.rows);  
    }

    async getOneTodo(req, res) {
        const id = req.params.id;
        const todo = await db.query(
        `SELECT * FROM todo WHERE id = $1;`,
        [id]  
        );
        res.json(todo.rows[0]);
    }

    async updateTodo(req, res) {
        const {id, title, description, status} = req.body;
        const todo = await db.query(
            `UPDATE todo set title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *;`,
            [title, description, status, id]
        );
        res.json(todo.rows[0]);
    }

    async deleteTodo(req, res) {
        const id = req.params.id;
        const deletedTodo = await db.query(
            `DELETE FROM todo where id = $1;`,
            [id]
        );
        res.json(`id: ${id}`);
    }
}

module.exports = new TodoController();