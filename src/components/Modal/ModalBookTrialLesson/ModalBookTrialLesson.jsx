import { BookForm } from 'components/BookForm/BookForm';
import {
  Avatar,
  Name,
  Subtitle,
  Teacher,
  TeacherWrapper,
  Text,
  Title,
  Wrapper,
} from './ModalBookTrialLesson.styled';

export const ModalBookTrialLesson = ({ item, handleModalToggle }) => {
  const { avatar_url, name, surname } = item;
  return (
    <Wrapper>
      <Title>Book trial lesson</Title>
      <Text>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Text>
      <TeacherWrapper>
        <Avatar src={avatar_url} alt="Avatar" />
        <div>
          <Teacher>Your teacher</Teacher>
          <Name>
            {name} {surname}
          </Name>
        </div>
      </TeacherWrapper>
      <Subtitle>What is your main reason for learning English?</Subtitle>
      <BookForm handleModalToggle={handleModalToggle} />
    </Wrapper>
  );
};
