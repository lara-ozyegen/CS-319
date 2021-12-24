import axios, { axiosConfigWithAuthToken } from "../axios";

export class GetRequest {
  public static async getData(
  ): Promise<any> {
    const requestURL = "api/getEvent";
    const token = await axiosConfigWithAuthToken();
    const config = {
      ...token,
    };

    const response = await axios.get(requestURL, config);

    return response.data;
  }
}