import { HTTP_METHODS } from "constants/enums";
import { FilterObjectInterface } from 'interfaces';
import { createApiRequest } from "./axios";

const errorHandler = (e: any) => console.log(`Error occurred while fetching data from the server ${e}`);

class ApiCallCreator {
  getMockData(type: string) {
    return createApiRequest(
      `/${type}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res.data)
      .catch((e) => errorHandler(e));
  }

  getReport(filterObj: FilterObjectInterface) {
    return createApiRequest(
      `/report`,
      HTTP_METHODS.POST,
      filterObj
    )
      .then(res => res.data)
      .catch((e) => errorHandler(e));
  }
}

const api = new ApiCallCreator();

export default api;