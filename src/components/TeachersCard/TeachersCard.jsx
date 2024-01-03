import { FeaturesList } from 'components/FeaturesList/FeaturesList';
import {
  Avatar,
  CardWrapper,
  Description,
  DescriptionBlock,
  ImageWrapper,
  Name,
  ReadMoreBtn,
  Text,
  UpperList,
} from './TeachersCard.styled';
import { FavoritesHeart } from 'components/FavoritesHeart/FavoritesHeart';
import { LevelsBlock } from 'components/LevelsBlock/LevelsBlock';

export const TeachersCard = ({ item }) => {
  const { avatar_url, name, surname, languages, lesson_info, conditions } =
    item;

  return (
    <CardWrapper>
      <ImageWrapper>
        <Avatar src={avatar_url} alt="Avatar" />
      </ImageWrapper>
      <div>
        <UpperList>
          <Text>Languages</Text>
          <FeaturesList item={item} />
          <FavoritesHeart />
        </UpperList>
        <DescriptionBlock>
          <Name>
            {name} {surname}
          </Name>
          <Text>
            Speaks: <Description className="lang">{`${languages}`}</Description>
          </Text>
          <Text>
            Lesson Info: {''}
            <Description>{lesson_info}</Description>
          </Text>
          <Text>
            Conditions: {''}
            <Description>{`${conditions}`}</Description>
          </Text>
        </DescriptionBlock>
        <ReadMoreBtn>Read more</ReadMoreBtn>
        <LevelsBlock item={item} />
      </div>
    </CardWrapper>
  );
};
