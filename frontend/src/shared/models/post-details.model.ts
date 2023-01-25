export interface PostDetails {
  id: number;
  mushroomId: number;
  quantity: number;
  latitude: number;
  longitude: number;
  upvotes: number;
  downvotes: number;
  userId: number;
  userUpvoted: boolean;
  userDownvoted: boolean;
  image: string;
}
