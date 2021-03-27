import ApiRequest from './request';
import baseUrl from './url';

const API = {};

// Forecast
API.forecast = ApiRequest.get(baseUrl.forecast);
API.current = ApiRequest.get(baseUrl.current);

export default API;
