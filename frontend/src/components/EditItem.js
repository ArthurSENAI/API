import React, { useState, useEffect } from 'react';
import { updateItem, getItems } from '../api';
import { useParams } from 'react-router-dom';

const EditItem = () => {
  const [name, setName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await getItems(id);
    setName(response.data.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, { name });
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditItem;
