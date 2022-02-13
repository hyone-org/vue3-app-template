// /* eslint-disable no-unused-vars */
import { setupSentry } from '@utils/sentry';

const SentryPlugin = {
  install(app, options) {
    setupSentry(app, options.router);
  },
};
export { SentryPlugin };
