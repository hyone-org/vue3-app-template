import { createComponentWithLoader } from '@hyone/core-ui';
import UserStep from './steps/user-step.vue';
import PasswordStep from './steps/password-step.vue';
import RecoveryPasswordStep from './steps/recovery-password-step.vue';
import LoadingStep from './steps/loading-step.vue';
import SessionCardTransition from './session-card-transition.vue';

const loadingComponent = LoadingStep;
const transitionComponent = SessionCardTransition;

const stepsDictionary = {
  UserStep: createComponentWithLoader({ component: UserStep, loadingComponent, transitionComponent }),
  PasswordStep: createComponentWithLoader({ component: PasswordStep, loadingComponent, transitionComponent }),
  RecoveryPasswordStep: createComponentWithLoader({
    component: RecoveryPasswordStep,
    loadingComponent,
    transitionComponent,
  }),
};

export { stepsDictionary };
