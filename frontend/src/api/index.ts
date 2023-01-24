import axios, {Axios} from 'axios';
import getMesssageResponse from './contracts/sendMessage';
import postMesssageResponse from './contracts/postMessage';
import postPostResponse from './contracts/postPost';

const api: Axios = axios.create({
  baseURL: 'http://172.30.128.1:8000/funga/',
  withCredentials: true,
});

api.interceptors.request.use(req => {
  return req;
});

const API = {
  message: {
      getMesssageResponse,
      postMesssageResponse,
      postPostResponse,
  },
};

export {api};

export default API;
