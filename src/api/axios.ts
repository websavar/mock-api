import Axios, { AxiosInstance } from "axios";
import { HTTP_METHODS } from "constants/enums";
import { networkLogger } from 'helper/utils';

const apiUrl: string = 'http://178.63.13.157:8090';
const enableNetworkLogger: boolean = false;

const axios: AxiosInstance = Axios.create({
  baseURL: `${apiUrl}/mock-api/api/`
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data: any
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

axios.interceptors.response.use(
  function (response) {
    if (enableNetworkLogger) {
      networkLogger(response);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;