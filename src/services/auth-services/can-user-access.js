import { OneChurchAPI } from '@api';
import { Settings } from '@settings';
// import { delay } from '@utils/promises/delay';

const canUserAccess = async () => {
  if (Settings.isDevelopment) {
    // await delay(3000);
    return true;
  }

  return OneChurchAPI.whoAmI()
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error.response));
};

export { canUserAccess };
