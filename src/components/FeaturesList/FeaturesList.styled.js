import styled from 'styled-components';

export const FeaturesWrapper = styled.ul`
  display: flex;
  gap: 16px;
  margin-left: 192px;
  margin-right: 60px;
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FeaturesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child)::after {
    content: '';
    /* position: absolute;
    top: 0;
    left: 0; */
    display: flex;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.2);
  }
`;

export const Book = styled.svg`
  width: 16px;
  height: 16px;
  fill: white;
  stroke: black;
  margin-right: 8px;
`;

export const Feature = styled.p`
  margin-right: 16px;
`;

export const Star = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--olive);
  margin-right: 8px;
`;

export const StyledText = styled.span`
  color: var(--green);
`;
