import {AxiosResponse} from 'axios';
import {api} from '../..';

export interface AddPostRequest {
  mushroomId: number;
  quantity: number;
  latitude: number;
  longitude: number;
  userId: number;
  photoBase64: string;
}

export type ModelResponse = {
  response: string;
};

export type AddPostResponse = AxiosResponse<ModelResponse>;

const addPost = (payload: AddPostRequest): Promise<AddPostResponse> => {
  const response = api.post('post', {
    ...payload,
    mushroom_id: payload.mushroomId,
    user_id: payload.userId,
    image: payload.photoBase64,
  });
  return response;
};

export default addPost;
