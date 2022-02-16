import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const coreHttpClient = axios.create({
  baseURL,
  timeout: 10000,
});

export { coreHttpClient };
