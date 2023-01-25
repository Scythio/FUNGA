import axios, {Axios} from 'axios';
import getMesssageResponse from './contracts/sendMessage';
import postMesssageResponse from './contracts/postMessage';
import postPostResponse from './contracts/postPost';
import getMushroomList from './contracts/mushroom/get-mushroom-species';
import getPostList from './contracts/getPostList';
import addPost from './contracts/post/add-post';
import login from './contracts/user/log-in';

const api: Axios = axios.create({
  baseURL: 'http://172.17.16.1:8000/funga/',
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
  mushroom: {
    getMushroomList,
  },
  post: {
    getPostList,
    addPost,
  },
  user: {
    login,
  },
};

export {api};

export default API;
