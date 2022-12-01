const TodoTable = () => {
  return (
    <div className='todoTable col-span-2 w-full border-2 border-gray-200  rounded-lg shadow-md overflow-hidden'>
      <div class='overflow-x-auto relative'>
        <table className='w-full'>
          <tr className=' border-1 border-b border-gray-200 w-full '>
            <td className='p-3 text-gray-800 font-bold text-md'>Completed</td>
            <td className='p-3 col-span-3 text-gray-800 font-bold text-md'>
              Title
            </td>
            <td className='p-3 text-gray-800 font-bold text-md'>Date</td>
            <td className='p-3 text-gray-800 font-bold text-md'>Edit</td>
            <td className='p-3 text-gray-800 font-bold text-md'>Delete</td>
          </tr>
          {[1, 2, 3]?.map((list) => (
            <tr
              key={`ListKey${list}`}
              className='group hover:bg-gray-700  border-1 border-b border-gray-200 w-full '>
              <td className='p-3'>
                <button className='text-red-500 text-sm'>
                  <svg width='16' height='16' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z'
                    />
                  </svg>
                </button>
              </td>
              <td className='p-3 col-span-3 text-gray-700 text-base group-hover:text-white'>
                Todo #{list}
              </td>
              <td className='p-3 text-gray-700 text-base group-hover:text-white'>
                Nov 1{list},2022
              </td>
              <td className='p-3'>
                <button className='text-blue-500 text-sm'>
                  <svg width='16' height='16' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z'
                    />
                  </svg>
                </button>
              </td>
              <td className='p-3'>
                <button className='text-red-500 text-sm'>
                  <svg width='16' height='16' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z'
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TodoTable;
