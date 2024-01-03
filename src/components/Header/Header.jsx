import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper, LinkWrapper, Nav, StyledLink } from './Header.styled';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Nav>
          <StyledLink to="/">
            <Logo />
          </StyledLink>

          <LinkWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/teachers">Teachers</StyledLink>
          </LinkWrapper>

          <StyledLink to="/favorites">Favorites</StyledLink>
        </Nav>
      </HeaderWrapper>
    </Container>
  );
};
