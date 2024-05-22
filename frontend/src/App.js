import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';

function App() {
  return (
    <div>
      <h1>API Frontend</h1>
      <Routes>
        <Route path="/" element={<ListItems />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </div>
  );
}

export default App;
