import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper, LinkWrapper, Nav, StyledLink } from './Header.styled';

export const Header = () => {
  return (
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
  );
};
