import { FeaturesList } from 'components/FeaturesList/FeaturesList';
import {
  Avatar,
  ButtonWrapper,
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
import { useState } from 'react';
import { Reviews } from 'components/Reviews/Reviesws';
import { Button } from 'components/Button/Button';
import { BasicModalWindow } from 'components/Modal/BasicModalWindow/BasicModalWindow';
import { ModalBookTrialLesson } from 'components/Modal/ModalBookTrialLesson/ModalBookTrialLesson';

export const TeachersCard = ({ item }) => {
  const { avatar_url, name, surname, languages, lesson_info, conditions } =
    item;

  const [readMore, setReadMore] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(state => !state);
    // document.body.classList.toggle('body-scroll-lock');
  };

  return (
    <CardWrapper>
      <div>
        <ImageWrapper>
          <Avatar src={avatar_url} alt="Avatar" />
        </ImageWrapper>
      </div>
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
        {!readMore ? (
          <ReadMoreBtn onClick={() => setReadMore(true)}>Read more</ReadMoreBtn>
        ) : (
          <Reviews item={item} />
        )}
        <LevelsBlock item={item} />
        {readMore && (
          <ButtonWrapper>
            <Button
              padding={'16px 48px'}
              text={'Book trial lesson'}
              type={'button'}
              handleClick={handleModal}
            />
          </ButtonWrapper>
        )}
      </div>
      {modal && (
        <BasicModalWindow handleModalToggle={handleModal}>
          <ModalBookTrialLesson handleModalToggle={handleModal} item={item} />
        </BasicModalWindow>
      )}
    </CardWrapper>
  );
};
