import axios from 'axios';

export const apiUrl = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
