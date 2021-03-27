const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://api.openweathermap.org',
      assets: '',
      origin: '',
      apikey: '1a22f3d9d4a2a1c84cb845c2dc60c885',
    },
  },

  production: {
    url: {
      api: '',
      assets: '',
      origin: '',
      apikey: '',
    },
  },
};

const appConfig = constants[activeConfig];

export default appConfig;
