export interface PostDetailsDTO {
  id: number;
  mushroom_id: number;
  quantity: number;
  latitude: number;
  longitude: number;
  upvotes: number;
  downvotes: number;
  user_id: number;
  user_upvoted: boolean;
  user_downvoted: boolean;
  image: string;
}
