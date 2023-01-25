import {AxiosResponse} from 'axios';
import {api} from '../..';

export interface LoginRequest {
  username: string;
  password: string;
}

export type ModelResponse = {
  response: string;
  user_id: number;
};

export type LoginResponse = AxiosResponse<ModelResponse>;

const login = (payload: LoginRequest): Promise<LoginResponse> => {
  console.log(payload);
  const response = api.post('log-in', {
    ...payload,
  });
  return response;
};

export default login;
