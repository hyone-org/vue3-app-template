/* eslint-disable consistent-return */
import { AuthServices } from '@services/auth-services';

const authGuard = async (to, _from, next) => {
  const canAccess = await AuthServices.canUserAccess();
  if (to.name !== 'Session' && !canAccess) next({ name: 'Session' });
  else next();
};

export { authGuard };
