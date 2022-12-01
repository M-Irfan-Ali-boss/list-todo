import { instance } from 'helper/helper';
import moment from 'moment/moment';
import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoTable from './TodoTable';

const Todo = ({ listSelected }) => {
  const [todos, setTodos] = useState([]);
  const [formValues, setFormValues] = useState({
    title: '',
    date: '',
  });
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = async (e) => {
    e.preventDefault();
    if (formValues?.title && formValues?.date)
      try {
        let values = {
          title: formValues?.title,
          date: formValues?.date,
          isCompleted: false,
          listId: listSelected?._id,
        };
        const result = await instance.post('/todo', values);
        if (result.status === 201) {
          setFormValues({
            title: '',
            date: '',
          });
          setSelectedTodo(null);
          getTodosByList(listSelected?._id);
        }
      } catch (error) {
        console.log({ error });
      }
  };

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setFormValues({
      title: todo?.title,
      date: moment(todo?.date).format('yyyy-MM-DD'),
    });
  };

  const updateCompletedList = async (todo) => {
    const values = {
      ...todo,
      isCompleted: !todo?.isCompleted,
    };
    try {
      const result = await instance.put(`/todo/${values?._id}`, values);
      if (result.status === 200) {
        getTodosByList(listSelected?._id);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const updateList = async (e) => {
    e.preventDefault();
    if (formValues?.title && formValues?.date) {
      const values = {
        ...selectedTodo,
        title: formValues?.title,
      };
      try {
        const result = await instance.put(`/todo/${values?._id}`, values);
        if (result.status === 200) {
          setFormValues({
            title: '',
            date: '',
          });
          setSelectedTodo(null);
          getTodosByList(listSelected?._id);
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  const handleDelete = async (todoId) => {
    try {
      const result = await instance.delete(`/todo/${todoId}`);
      if (result.status === 200) getTodosByList(listSelected?._id);
    } catch (error) {
      console.log({ error });
    }
  };

  const getTodosByList = async (listId) => {
    try {
      const result = await instance.get(`/todo/list/${listId}`);
      setTodos(result?.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (listSelected?._id) getTodosByList(listSelected?._id);
  }, [listSelected]);

  return (
    <div className='w-full block md:col-span-2'>
      <h2 className='text-gray-800 text-3xl font-bold italic mb-5'>Todos</h2>
      <TodoForm
        addTodo={addTodo}
        formValues={formValues}
        setFormValues={setFormValues}
        selectedTodo={selectedTodo}
        updateList={updateList}
      />
      <TodoTable
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        updateCompletedList={updateCompletedList}
      />
    </div>
  );
};

export default Todo;
