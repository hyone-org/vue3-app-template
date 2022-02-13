import { oneChurchHttpClient } from './one-church-http-client';

const findUserByEmailOrPhone = (params) => oneChurchHttpClient.post('/find_user', params);

const signIn = (params) => oneChurchHttpClient.post('/login', params);

const signUp = (params) => oneChurchHttpClient.post('/signup', params);

const forgotPassword = (params) => oneChurchHttpClient.post('/forgot_password', params);

const whoAmI = () => oneChurchHttpClient.get('/whoami');

const OneChurchAPI = {
  findUserByEmailOrPhone,
  signIn,
  signUp,
  forgotPassword,
  whoAmI,
};

export { OneChurchAPI };
