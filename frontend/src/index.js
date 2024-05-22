import { getItems, addItem, updateItem, deleteItem } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const addItemForm = document.getElementById('addItemForm');
  const itemNameInput = document.getElementById('itemName');
  const itemPositionInput = document.getElementById('itemPosition');
  const itemDepartmentInput = document.getElementById('itemDepartment');
  const itemsList = document.getElementById('itemsList');

  const fetchItems = async () => {
    try {
      const response = await getItems();
      itemsList.innerHTML = '';
      response.data.forEach(item => {
        const listItem = document.createElement('li');
        
        const nameDiv = document.createElement('div');
        nameDiv.textContent = `Nome: ${item.name}`;
        nameDiv.classList.add('info');

        const positionDiv = document.createElement('div');
        positionDiv.textContent = `Cargo: ${item.position}`;
        positionDiv.classList.add('info');

        const departmentDiv = document.createElement('div');
        departmentDiv.textContent = `Departamento: ${item.department}`;
        departmentDiv.classList.add('info');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', () => handleDelete(item.id));

        listItem.appendChild(nameDiv);
        listItem.appendChild(positionDiv);
        listItem.appendChild(departmentDiv);
        listItem.appendChild(deleteButton);
        itemsList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Erro ao buscar os funcionários:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Erro ao deletar o funcionário:', error);
    }
  };

  addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = itemNameInput.value;
    const position = itemPositionInput.value;
    const department = itemDepartmentInput.value;

    try {
      await addItem({ name, position, department });
      itemNameInput.value = '';
      itemPositionInput.value = '';
      itemDepartmentInput.value = '';
      fetchItems();
    } catch (error) {
      console.error('Erro ao adicionar o funcionário:', error);
    }
  });

  fetchItems();
});
