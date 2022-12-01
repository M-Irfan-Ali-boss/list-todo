import Joi from 'joi';
import Todo from '../models/TodoModel.js';

const addTodoValidSchema = Joi.object({
  title: Joi.string().required(),
  listId: Joi.string().required(),
  date: Joi.string().required(),
  isCompleted: Joi.boolean(),
});

export const getAllTodos = async (req, res) => {
  try {
    const results = await Todo.find({}, '-__v');
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const getAllTodosByList = async (req, res) => {
  const { listId } = req.params;
  try {
    const results = await Todo.find({ listId }, '-__v');
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const addTodo = async (req, res) => {
  let { error } = addTodoValidSchema.validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  try {
    const { title, date, isCompleted, listId } = req.body;
    const result = await Todo.create({ title, date, isCompleted, listId });
    res.status(201).send({ Todos: result });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const result = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
      new: true,
    });
    if (!result) return res.status(404).send({ error: 'Todo not found!' });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const result = await Todo.deleteOne({ _id: todoId });
    if (+result?.deletedCount !== 1)
      return res.status(500).send({ error: 'Something went wrong!' });
    res.status(410).send({ message: 'Todo deleted successfully!' });
  } catch (error) {
    res.status(500).send({ error });
  }
};
