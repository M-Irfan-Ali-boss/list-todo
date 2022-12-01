import Joi from 'joi';
import List from '../models/ListModel.js';
import Todo from '../models/TodoModel.js';

const addListValidSchema = Joi.object({
  name: Joi.string().required(),
});

export const getAllLists = async (req, res) => {
  try {
    const results = await List.find({}, '-__v');
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const addList = async (req, res) => {
  let { error } = addListValidSchema.validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  try {
    const result = await List.create({ name: req.body.name });
    res.status(201).send({ lists: result });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const updateList = async (req, res) => {
  const { listId } = req.params;
  try {
    const result = await List.findOneAndUpdate(
      { _id: listId },
      { name: req.body.name },
      { new: true }
    );
    if (!result) return res.status(404).send({ error: 'List not found!' });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const deleteList = async (req, res) => {
  const { listId } = req.params;
  try {
    await Todo.deleteMany({ listId: listId });
    const result = await List.deleteOne({ _id: listId });
    if (+result?.deletedCount !== 1)
      return res.status(500).send({ error: 'Something went wrong!' });
    res
      .status(200)
      .send({ message: 'List and their todos deleted successfully!' });
  } catch (error) {
    res.status(500).send({ error });
  }
};
