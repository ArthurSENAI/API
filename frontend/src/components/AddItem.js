import React, { useState } from 'react';
import { addItem } from '../api';

const AddItem = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem({ name });
    setName('');
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
