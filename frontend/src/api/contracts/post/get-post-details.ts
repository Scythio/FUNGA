import {AxiosResponse} from 'axios';
import {api} from '../..';
import {PostDetailsDTO} from '../../models/post-details-dto.model';

export interface GetPostDetailsRequest {
  postId: number;
  userId: number;
}

export type ModelResponse = string;

export type GetPostDetailsResponse = AxiosResponse<ModelResponse>;

const getPostDetails = ({
  postId,
  userId,
}: GetPostDetailsRequest): Promise<GetPostDetailsResponse> => {
  const response = api.post('post-details', {
    post_id: postId,
    user_id: userId,
  });
  return response;
};

export default getPostDetails;
