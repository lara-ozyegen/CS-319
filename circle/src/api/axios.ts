import axios from 'axios';
import cognitoOptions from './amplify/options';

const baseURL = "http://localhost:3001/";

export const axiosConfigWithAuthToken = async () => {
  const options = await cognitoOptions();
  return options;
};

export default axios.create({
  baseURL: baseURL,
});
