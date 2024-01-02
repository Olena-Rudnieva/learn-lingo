import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 28px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 28px;
`;

export const StyledLink = styled(NavLink)`
  /* color: var(--white); */

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  /* &.active {
    color: var(--accent);
  } */

  /* @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    font-weight: 600;
  } */
`;
