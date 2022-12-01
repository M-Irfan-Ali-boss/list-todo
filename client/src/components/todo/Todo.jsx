import TodoForm from './TodoForm';
import TodoTable from './TodoTable';

const Todo = () => {
  return (
    <div className='w-full block md:col-span-2'>
      <h2 className='text-gray-800 text-3xl font-bold italic mb-5'>Todos</h2>
      <TodoForm />
      <TodoTable />
    </div>
  );
};

export default Todo;
