import { canUserAccess } from './can-user-access';
import { signIn } from './sign-in';
import { findUserByEmailOrPhone } from './find-user-by-email-or-phone';
import { forgotPassword } from './forgot-password';
import { signUp } from './sign-up';

const AuthServices = {
  canUserAccess,
  signIn,
  signUp,
  findUserByEmailOrPhone,
  forgotPassword,
};

export { AuthServices };
