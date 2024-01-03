import { Filter } from 'components/Filter/Filter';
import { TeachersList } from 'components/TeachersList/TeachersList';
import { TeachersSection, TeachersWrapper } from './Teachers.styled';
import { Container } from 'components/Container/Container';
import { Button } from 'components/Button/Button';

const Teachers = () => {
  return (
    <TeachersSection>
      <Container>
        <TeachersWrapper>
          <Filter />
          <TeachersList />
          <Button
            padding={'16px 48px'}
            text={'Load more'}
            type={'button'}
            // handleClick={handleCall}
          />
        </TeachersWrapper>
      </Container>
    </TeachersSection>
  );
};

export default Teachers;
