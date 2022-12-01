import express from 'express';
import {
  addList,
  deleteList,
  getAllLists,
  updateList,
} from '../controller/ListController.js';
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosByList,
  updateTodo,
} from '../controller/TodoController.js';

const router = express.Router();

router.get('/', getAllTodos);
router.get('/list/:listId', getAllTodosByList);
router.post('/', addTodo);
router.put('/:todoId', updateTodo);
router.delete('/:todoId', deleteTodo);

export default router;
