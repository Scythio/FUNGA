import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import LikeDislike from '../../../../shared/components/like-dislike';
import {MushroomRecord} from '../../../../shared/models/mushroom-record.model';
import cardStyles from './styles';

interface CardMushroomDetailsProps {
  mushroom: MushroomRecord;
}

const CardMushroomDetails: FC<CardMushroomDetailsProps> = ({mushroom}) => {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.cardImgWrapper}>
        <Image
          source={{
            uri: mushroom.imageSrc,
          }}
          resizeMode="cover"
          style={cardStyles.cardImg}
        />
      </View>
      <View style={cardStyles.cardInfo}>
        <Text style={cardStyles.cardTitle}>dadadada</Text>
        <Text numberOfLines={2} style={cardStyles.cardDetails}>
          {mushroom.description}
        </Text>
        <LikeDislike
          likeDislikestate={mushroom.likeDislikeState}
          likeCount={mushroom.likeCount}
          dislikeCount={mushroom.dislikeCount}
          onClick={() => {}}
        />
      </View>
    </View>
  );
};

export default CardMushroomDetails;
