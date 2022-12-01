const ListForm = () => {
  return (
    <form className='formList w-full flex items-center justify-between mb-10'>
      <input
        type='text'
        className='border-2 border-gray-300 rounded-md px-5 py-2 text-gray-800 focus:outline-none'
        placeholder='Enter name of list'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white font-medium rounded-md px-5 py-2 hover:bg-blue-700'>
        Add
      </button>
    </form>
  );
};

export default ListForm;
