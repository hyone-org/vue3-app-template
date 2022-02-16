import { delay } from '@utils/promises/delay';
import { CoreAPI } from '@api';
import { Settings } from '@settings';

const forgotPassword = async (userId) => {
  const params = { id: userId };

  if (Settings.isDevelopment) {
    await delay(3000);

    if (Math.random() < 0.5) throw new Error('Wrong password');
    return {};
  }

  return CoreAPI.forgotPassword(params)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error.response));
};

export { forgotPassword };
