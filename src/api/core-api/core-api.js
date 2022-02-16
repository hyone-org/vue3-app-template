import { coreHttpClient } from './core-http-client';

const findUserByEmailOrPhone = (params) => coreHttpClient.post('/find_user', params);

const signIn = (params) => coreHttpClient.post('/login', params);

const signUp = (params) => coreHttpClient.post('/signup', params);

const forgotPassword = (params) => coreHttpClient.post('/forgot_password', params);

const whoAmI = () => coreHttpClient.get('/whoami');

const CoreAPI = {
  findUserByEmailOrPhone,
  signIn,
  signUp,
  forgotPassword,
  whoAmI,
};

export { CoreAPI };
