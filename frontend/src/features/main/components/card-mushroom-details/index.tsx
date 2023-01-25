import {FC, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import LikeDislike from '../../../../shared/components/like-dislike';
import {LikeDislikeState} from '../../../../shared/constants/like-dislike-state.enum';
import {PostDetails} from '../../../../shared/models/post-details.model';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {selectMushroomSpecies} from '../../../../store/slices/mushroom/mushroom.slice';
import cardStyles from './styles';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {dislikePost, likePost} from '../../../../store/slices/post/post.slice';
import {selectCurrentUser} from '../../../../store/slices/user/user.slice';

interface CardMushroomDetailsProps {
  postDetails: PostDetails | null;
}

const CardMushroomDetails: FC<CardMushroomDetailsProps> = ({postDetails}) => {
  const mushroomSpecies = useAppSelector(selectMushroomSpecies);
  const currentUser = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const [details, setDetails] = useState<PostDetails | null>(postDetails);
  useEffect(() => {
    setDetails(postDetails);
  }, [postDetails]);

  const onLikeDislikeClick = (state: LikeDislikeState) => {
    if (details) {
      let upvotes = details.upvotes;
      let downvotes = details.downvotes;
      let userUpvoted = details.userUpvoted;
      let userDownvoted = details.userDownvoted;
      if (state == LikeDislikeState.LIKE) {
        upvotes = details.userUpvoted ? details.upvotes : details.upvotes + 1;
        downvotes = details.userDownvoted
          ? details.downvotes - 1
          : details.downvotes;
        userUpvoted = true;
        userDownvoted = false;
        currentUser &&
          dispatch(
            likePost({
              action: 'add',
              userId: currentUser.id,
              postId: details.id,
            }),
          );
      } else if (state == LikeDislikeState.DISLIKE) {
        upvotes = details.userUpvoted ? details.upvotes - 1 : details.upvotes;
        downvotes = details.userDownvoted
          ? details.downvotes
          : details.downvotes + 1;
        userUpvoted = false;
        userDownvoted = true;
        currentUser &&
          dispatch(
            dislikePost({
              action: 'add',
              userId: currentUser.id,
              postId: details.id,
            }),
          );
      } else {
        upvotes = details.userUpvoted ? details.upvotes - 1 : details.upvotes;
        downvotes = details.userDownvoted
          ? details.downvotes - 1
          : details.downvotes;
        userUpvoted = false;
        userDownvoted = false;
        if (currentUser) {
          details.userUpvoted &&
            dispatch(
              likePost({
                action: 'remove',
                userId: currentUser.id,
                postId: details.id,
              }),
            );
          details.userDownvoted &&
            dispatch(
              dislikePost({
                action: 'remove',
                userId: currentUser.id,
                postId: details.id,
              }),
            );
        }
      }

      const newDetails: PostDetails = {
        ...details,
        userUpvoted: userUpvoted,
        userDownvoted: userDownvoted,
        downvotes: downvotes,
        upvotes: upvotes,
      };
      setDetails(newDetails);
    }
  };

  return (
    <View style={cardStyles.card}>
      {details ? (
        <>
          <View style={cardStyles.cardImgWrapper}>
            <Image
              source={{
                uri: `data:image/png;base64,${details.image.substring(1)}`,
              }}
              resizeMode="contain"
              style={cardStyles.cardImg}
            />
          </View>
          <View style={cardStyles.cardInfo}>
            <Text style={cardStyles.cardTitle}>
              {`Gatunek: ${
                mushroomSpecies.find(value => value.id == details.mushroomId)
                  ?.name
              }`}
            </Text>
            <Text numberOfLines={2} style={cardStyles.cardDetails}>
              {`Liczba Grzybow: ${details.quantity}`}
            </Text>
            <LikeDislike
              likeDislikestate={
                details.userUpvoted
                  ? LikeDislikeState.LIKE
                  : details.userDownvoted
                  ? LikeDislikeState.DISLIKE
                  : LikeDislikeState.UNDEFINED
              }
              likeCount={details.upvotes}
              dislikeCount={details.downvotes}
              onClick={onLikeDislikeClick}
            />
          </View>
        </>
      ) : (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}
    </View>
  );
};

export default CardMushroomDetails;
