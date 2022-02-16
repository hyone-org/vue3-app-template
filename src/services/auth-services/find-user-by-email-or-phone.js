import { CoreAPI } from '@api';
import { Settings } from '@settings';
import { delay } from '@utils/promises/delay';

const findUserByEmailOrPhone = async (emailOrPhone, grtoken = null) => {
  const params = { username: emailOrPhone, grtoken };

  if (Settings.isDevelopment) {
    await delay(3000);
    if (Math.random() < 0.5) {
      return {
        id: 1,
        name: 'Mark Zuckerberg',
        photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg',
        has_password: emailOrPhone.indexOf('nopass') < 0,
      };
    }
    return {};
  }

  return CoreAPI.findUserByEmailOrPhone(params)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error.response));
};

export { findUserByEmailOrPhone };
