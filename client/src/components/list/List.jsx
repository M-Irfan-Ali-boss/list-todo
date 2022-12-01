import { instance } from 'helper/helper';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ListForm from './ListForm';
import ListTable from './ListTable';

const List = ({ lists, getLists, setListSelected }) => {
  const [selectedList, setSelectedList] = useState(null);
  const [list, setList] = useState('');

  const addList = async (e) => {
    e.preventDefault();
    if (!list) return toast.error('Please enter the list.');
    try {
      const result = await instance.post('/list', { name: list });
      if (result.status === 201) {
        setList('');
        setSelectedList(null);
        getLists();
        toast.success('List added successfully!');
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleEdit = (list) => {
    setSelectedList(list);
    setList(list?.name);
  };

  const updateList = async (e) => {
    e.preventDefault();
    if (!list) return toast.error('Please enter the list.');
    const values = {
      ...selectedList,
      name: list,
    };
    try {
      const result = await instance.put(`/list/323232`, values);
      if (result.status === 200) {
        setList('');
        setSelectedList(null);
        getLists();
        toast.success('List updated successfully!');
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDelete = async (listId) => {
    try {
      const result = await instance.delete(`/list/${listId}`);
      if (result.status === 200) {
        toast.success('List and their todos deleted successfully!');
        getLists();
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className='w-full block'>
      <h2 className='text-gray-800 text-3xl font-bold italic mb-5'>Lists</h2>
      <ListForm
        list={list}
        setList={setList}
        addList={addList}
        selectedList={selectedList}
        updateList={updateList}
      />
      <ListTable
        lists={lists}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        setListSelected={setListSelected}
      />
    </div>
  );
};

export default List;
