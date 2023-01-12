import {LikeDislikeState} from '../constants/like-dislike-state.enum';
import {Coordinates} from './coordinates.model';

export interface MushroomRecord {
  id: number;
  mushroomSpeciesFk: number;
  coordinates: Coordinates;
  imageSrc: string;
  description: string;
  likeDislikeState: LikeDislikeState;
  likeCount: number;
  dislikeCount: number;
  weights: number;
}
