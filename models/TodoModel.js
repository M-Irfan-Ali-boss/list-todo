import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    isCompleted: Boolean,
    listId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'List',
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model('Todo', todoSchema);
