import {AxiosResponse} from 'axios';
import {api} from '..';

interface getPostListRequest {
    post_pk: number,
    mushroom_pk: number,
    user_pk: number,
    quantity: number,
    latitude: number,
    longitude: number,
};

export interface ModelResponse {
    response: Array<getPostListRequest>;
}

export type getPostListResponse = AxiosResponse<ModelResponse>;

const getPostListResponse = ({}: {}): Promise<getPostListResponse> => {
    const response = api.get('post-list');
    return response;
};

export default getPostListResponse;
