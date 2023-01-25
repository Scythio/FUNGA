import {AxiosResponse} from 'axios';
import {api} from '../..';

export interface LikePostRequest {
  action: string;
  userId: number;
  postId: number;
}

export type ModelResponse = {
  response: string;
};

export type LikePostResponse = AxiosResponse<ModelResponse>;

const likePost = (payload: LikePostRequest): Promise<LikePostResponse> => {
  const response = api.post('upvote', {
    action: payload.action,
    user_id: payload.userId,
    post_id: payload.postId,
  });
  return response;
};

export default likePost;
