import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const oneChurchHttpClient = axios.create({
  baseURL,
  timeout: 10000,
});

export { oneChurchHttpClient };
