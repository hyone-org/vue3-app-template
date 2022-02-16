import { CoreAPI } from '@api';
import { Settings } from '@settings';
import { delay } from '@utils/promises/delay';
import { MockUser } from './mock-user';

const signIn = async (userId, password) => {
  const params = { id: userId, password };

  if (Settings.isDevelopment) {
    await delay(3000);
    if (Math.random() < 0.5) return MockUser;

    return {};
  }
  return CoreAPI.signIn(params)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error.response));
};

export { signIn };
