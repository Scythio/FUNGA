import axios, {Axios} from 'axios';

const api: Axios = axios.create({
  baseURL: '',
  withCredentials: true,
});

api.interceptors.request.use(req => {
  return req;
});
