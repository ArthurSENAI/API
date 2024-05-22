import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Substitua pela URL correta da sua API

export const getItems = () => axios.get(`${API_URL}/items`);
export const addItem = (item) => axios.post(`${API_URL}/items`, item);
export const updateItem = (id, item) => axios.put(`${API_URL}/items/${id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/items/${id}`);
