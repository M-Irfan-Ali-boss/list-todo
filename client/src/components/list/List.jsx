import ListForm from './ListForm';
import ListTable from './ListTable';

const List = () => {
  return (
    <div className='w-full block'>
      <h2 className='text-gray-800 text-3xl font-bold italic mb-5'>List</h2>
      <ListForm />
      <ListTable />
    </div>
  );
};

export default List;
