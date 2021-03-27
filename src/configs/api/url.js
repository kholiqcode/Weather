import appConfig from './constant';

export const config = appConfig;

const baseUrl = {
  forecast: `${config.url.api}/data/2.5/forecast`,
  current: `${config.url.api}/data/2.5/weather`,
};

export default baseUrl;
