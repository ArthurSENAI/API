import { getItems, addItem, updateItem, deleteItem } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const addItemForm = document.getElementById('addItemForm');
  const itemNameInput = document.getElementById('itemName');
  const itemsList = document.getElementById('itemsList');

  const fetchItems = async () => {
    try {
      const response = await getItems();
      itemsList.innerHTML = '';
      response.data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => handleDelete(item.id));
        listItem.appendChild(deleteButton);
        itemsList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = itemNameInput.value;
    try {
      await addItem({ name });
      itemNameInput.value = '';
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  });

  fetchItems();
});
