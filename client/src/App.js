import List from 'components/list/List';
import Todo from 'components/todo/Todo';

function App() {
  return (
    <div className='App w-full'>
      <header className='header bg-gray-800 text-whit p-5 w-full'>
        <h1 className='text-center text-4xl text-white italic font-bold tracking-widest	'>
          List Todos
        </h1>
      </header>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <List />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
