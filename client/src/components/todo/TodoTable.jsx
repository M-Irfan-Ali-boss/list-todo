import moment from 'moment';

const TodoTable = ({
  todos,
  handleEdit,
  handleDelete,
  updateCompletedList,
}) => {
  return (
    <div className='todoTable col-span-2 w-full border-2 border-gray-200  rounded-lg shadow-md overflow-hidden'>
      <div className='overflow-x-auto relative'>
        <table className='w-full'>
          <thead>
            <tr className=' border-1 border-b border-gray-200 w-full '>
              <th className='text-left p-3 text-gray-800 font-bold text-md'>
                Completed
              </th>
              <th className='text-left p-3 col-span-3 text-gray-800 font-bold text-md'>
                Title
              </th>
              <th className='text-left p-3 text-gray-800 font-bold text-md'>
                Date
              </th>
              <th className='text-left p-3 text-gray-800 font-bold text-md'>
                Edit
              </th>
              <th className='text-left p-3 text-gray-800 font-bold text-md'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr
                key={`TodoKey${todo?._id}`}
                className='group hover:bg-gray-700  border-1 border-b border-gray-200 w-full '>
                <td>
                  <button
                    onClick={() => updateCompletedList(todo)}
                    className={`${
                      todo?.isCompleted ? 'text-green-500' : 'text-red-500'
                    } text-sm p-3`}>
                    {todo?.isCompleted ? (
                      <svg width='16' height='16' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z'
                        />
                      </svg>
                    ) : (
                      <svg
                        width='16'
                        fill='currentColor'
                        height='16'
                        viewBox='0 0 24 24'>
                        <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z' />
                      </svg>
                    )}
                  </button>
                </td>
                <td className='p-3 col-span-3 text-gray-700 text-base group-hover:text-white'>
                  {todo?.title}
                </td>
                <td className='p-3 text-gray-700 text-base group-hover:text-white'>
                  {moment(todo?.date).format('MMM DD,yyyy')}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(todo)}
                    className='p-3 text-blue-500 text-sm'>
                    <svg width='16' height='16' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z'
                      />
                    </svg>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(todo?._id)}
                    className='p-3 text-red-500 text-sm'>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoTable;
