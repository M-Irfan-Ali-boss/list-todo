const ListTable = () => {
  return (
    <div className='listTable w-full border-2 border-gray-200  rounded-lg shadow-md overflow-hidden'>
      <table className='w-full'>
        <tr className='p-3 px-5 border-1 border-b border-gray-200 w-full grid grid-cols-5 gap-4'>
          <td className='col-span-3 text-gray-800 font-bold text-lg'>Name</td>
          <td className='text-gray-800 font-bold text-lg'>Edit</td>
          <td className='text-gray-800 font-bold text-lg'>Delete</td>
        </tr>
        {[1, 2, 3]?.map((list) => (
          <tr
            key={`ListKey${list}`}
            className='group hover:bg-gray-700 p-3 px-5 border-1 border-b border-gray-200 w-full grid grid-cols-5 gap-4'>
            <td className='col-span-3 text-gray-700 text-base group-hover:text-white'>
              List #{list}
            </td>
            <td>
              <button className='text-blue-500 text-sm'>
                <svg width='16' height='16' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z'
                  />
                </svg>
              </button>
            </td>
            <td>
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
  );
};

export default ListTable;
