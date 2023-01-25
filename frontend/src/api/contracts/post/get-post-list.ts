import {AxiosResponse} from 'axios';
import {api} from '../..';

interface GetPostListRequest {}

export type ModelResponse = Array<string>;

export type GetPostListResponse = AxiosResponse<ModelResponse>;

const getPostList = ({}: GetPostListRequest): Promise<GetPostListResponse> => {
  const response = api.get('post-list');
  return response;
};

export default getPostList;
