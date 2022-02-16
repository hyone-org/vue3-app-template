import { CoreAPI } from '@api';
import { Settings } from '@settings';
import { delay } from '@utils/promises/delay';
// import { MockUser } from './mock-user';

const signUp = async ({
  email,
  name,
  phone,
  password,
  invitecode = null,
}) => {
  const params = {
    user: JSON.stringify({
      email,
      name,
      phone,
      password,
      invitecode,
    }),
  };

  if (Settings.isDevelopment) {
    await delay(3000);

    return {};
  }

  return CoreAPI.signUp(params)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error.response));
};

export { signUp };
