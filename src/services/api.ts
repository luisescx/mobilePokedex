import axios, {AxiosError, AxiosResponse} from 'axios';

export const apiUrl = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL: apiUrl,
});

const eject = api.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  async (error: AxiosError) => {
    return error?.response;
  },
);

axios.interceptors.request.eject(eject);

export default api;
