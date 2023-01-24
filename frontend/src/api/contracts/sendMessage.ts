import {AxiosResponse} from 'axios';
import {api} from '..';

interface SendMessageRequest {};

export interface ModelResponse {
    response: string;
}

export type SendMessageResponse = AxiosResponse<ModelResponse>;

const getMesssageResponse = ({}: SendMessageRequest): Promise<SendMessageResponse> => {
  const response = api.get('send-message');
  return response;
};

export default getMesssageResponse;