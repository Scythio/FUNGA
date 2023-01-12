import {FC, useState} from 'react';
import {View} from 'react-native';
import {Button, Text, IconButton} from 'react-native-paper';
import {LikeDislikeState} from '../../constants/like-dislike-state.enum';
import {styles} from './styles';

export interface LikeDislikeProps {
  likeDislikestate: LikeDislikeState;
  likeCount: number;
  dislikeCount: number;
  onClick: (state: LikeDislikeState) => void;
}

const LikeDislike: FC<LikeDislikeProps> = ({
  likeDislikestate,
  likeCount,
  dislikeCount,
  onClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <IconButton
          style={
            likeDislikestate == LikeDislikeState.LIKE
              ? styles.likeActive
              : styles.likeInactive
          }
          onPress={() => {
            likeDislikestate == LikeDislikeState.LIKE
              ? onClick(LikeDislikeState.UNDEFINED)
              : onClick(LikeDislikeState.LIKE);
          }}
          icon="like2"
        />
        <Text>
          {likeDislikestate == LikeDislikeState.LIKE
            ? likeCount + 1
            : likeCount}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          style={
            likeDislikestate == LikeDislikeState.DISLIKE
              ? styles.dislikeActive
              : styles.dislikeInactive
          }
          onPress={() => {
            likeDislikestate == LikeDislikeState.DISLIKE
              ? onClick(LikeDislikeState.UNDEFINED)
              : onClick(LikeDislikeState.DISLIKE);
          }}
          icon="dislike2"
        />
        <Text>
          {likeDislikestate == LikeDislikeState.DISLIKE
            ? dislikeCount + 1
            : dislikeCount}
        </Text>
      </View>
    </View>
  );
};

export default LikeDislike;
