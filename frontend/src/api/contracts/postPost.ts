import {AxiosResponse} from 'axios';
import {api} from '..';

interface PostPostRequest {
    mushroom_pk: number,
    quantity: number,
    latitude: number,
    longitude: number,
    user_pk: number,
    image: {
        name: string,
        type: string,
        uri: string,
    },
};

export interface ModelResponse {
    response: string;
}

export type PostPostResponse = AxiosResponse<ModelResponse>;

const postPostResponse = (data: PostPostRequest): Promise<PostPostResponse> => {
    console.log(data);
    console.log('bbbbbbbbb')
    let formData = new FormData();
    formData.append('photo', { uri: data.image.uri, name: data.image.name, type: data.image.type });
    formData.append('mushroom_pk', data.mushroom_pk);
    formData.append('quantity', data.quantity);
    formData.append('latitude', data.latitude);
    formData.append('longitude', data.longitude);
    formData.append('user_pk', data.user_pk);
    const response = api.post('post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
  return response;
};

export default postPostResponse;