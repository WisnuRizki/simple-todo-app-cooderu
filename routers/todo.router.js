const express = require('express')
const router = express.Router()

const {getToDo, postToDo, updateToDo,deleteTodo} = require('../controllers/todo.controller')

router.get('/', getToDo);
router.post('/', postToDo);
router.put('/:id', updateToDo);
router.delete('/:id', deleteTodo);

module.exports = router;