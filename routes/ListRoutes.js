import express from 'express';
import {
  addList,
  deleteList,
  getAllLists,
  updateList,
} from '../controller/ListController.js';

const router = express.Router();

router.get('/', getAllLists);
router.post('/', addList);
router.put('/:listId', updateList);
router.delete('/:listId', deleteList);

export default router;
