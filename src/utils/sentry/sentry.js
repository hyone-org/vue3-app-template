/* eslint-disable camelcase, no-unused-vars */
import { Settings } from '@settings';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

const setupSentry = (app, router) => {
  if (!app || !router) console.error('Sentry not initialized');
  else {
    // Sentry.init({
    //   app,
    //   dsn: Settings.envs.SENTRY_DSN,
    //   integrations: [
    //     new Integrations.BrowserTracing({
    //       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    //       tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    //     }),
    //   ],
    //   tracesSampleRate: 1.0,
    // });
    console.log('Sentry initialized');
  }
};

const setSentryUser = (user) => {
  Sentry.configureScope((scope) => {
    if (user) {
      const {
        id, name, email, cell_phone,
      } = user;
      scope.setUser({
        id, name, email, cell_phone,
      });
    }
    console.log('Sentry configured');
  });
};

export { setupSentry, setSentryUser };
