import {AxiosResponse} from 'axios';
import {api} from '..';

interface PostMessageRequest {
    message: string;
};

export interface ModelResponse {
    response: string;
}

export type PostMessageResponse = AxiosResponse<ModelResponse>;

const postMesssageResponse = ({message}: PostMessageRequest): Promise<PostMessageResponse> => {
  const response = api.post('send-message', {messageAPIbackend: message});
  return response;
};

export default postMesssageResponse;