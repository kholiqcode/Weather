import { API } from '../../configs';
import appConfig from '../../configs/api/constant';
import { handleAsync } from '../../utils';

export const getCurrentWeather = async (payload = {}) => {
  const [res, err] = await handleAsync(
    API.current({
      params: { appid: appConfig.url.apikey, ...payload },
    }),
  );
  return [res?.axiosResponse?.data, err];
};
