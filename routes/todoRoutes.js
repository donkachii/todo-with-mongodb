const express = require("express");
const router = express.Router();
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

// Get all todos
router.get('/todo', getAllTodos);

// Create a todo task
router.post('/todo/create', createTodo);

// Update a todo task
router.put('/todo/:id', updateTodo);

// Delete a todo task
router.delete('/todo/:id', deleteTodo);

module.exports = router;
