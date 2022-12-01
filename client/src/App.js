import List from 'components/list/List';
import Todo from 'components/todo/Todo';

function App() {
  return (
    <div className='App w-full'>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-3 gap-8'>
          <List />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
