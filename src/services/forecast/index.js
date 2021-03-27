import { API } from '../../configs';
import appConfig from '../../configs/api/constant';
import { handleAsync } from '../../utils';

export const getForecast = async (payload = {}) => {
  const [res, err] = await handleAsync(
    API.forecast({
      params: { appid: appConfig.url.apikey, ...payload },
    }),
  );
  return [res?.axiosResponse?.data, err];
};
