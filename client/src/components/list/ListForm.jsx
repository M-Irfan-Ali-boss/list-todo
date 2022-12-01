const ListForm = ({ list, setList, addList, updateList, selectedList }) => {
  return (
    <form
      onSubmit={selectedList ? updateList : addList}
      className='formList w-full flex items-center justify-between mb-10 grid grid-cols-3 gap-4'>
      <input
        type='text'
        value={list}
        onChange={(e) => setList(e.target.value)}
        className='col-span-2 border-2 border-gray-300 rounded-md px-5 py-2 text-gray-800 focus:outline-none'
        placeholder='Enter name of list'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white font-medium rounded-md px-5 py-2.5 hover:bg-blue-700'>
        {selectedList ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default ListForm;
