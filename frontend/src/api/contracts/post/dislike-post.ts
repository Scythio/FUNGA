import {AxiosResponse} from 'axios';
import {api} from '../..';

export interface DislikePostRequest {
  action: string;
  userId: number;
  postId: number;
}

export type ModelResponse = {
  response: string;
};

export type DislikePostResponse = AxiosResponse<ModelResponse>;

const likePost = (
  payload: DislikePostRequest,
): Promise<DislikePostResponse> => {
  const response = api.post('downvote', {
    action: payload.action,
    user_id: payload.userId,
    post_id: payload.postId,
  });
  return response;
};

export default likePost;
