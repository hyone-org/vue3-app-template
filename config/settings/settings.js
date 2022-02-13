const Settings = {
  envs: {
    SENTRY_DSN: 'https://ba60bb1d02b649fc863f0c9edf77ffe0@o116632.ingest.sentry.io/5265881',
    ENVIRONMENT: process.env.NODE_ENV,
  },
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
};

export { Settings };
