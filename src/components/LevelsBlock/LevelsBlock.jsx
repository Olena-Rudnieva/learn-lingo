import { LevelsItem, LevelsList } from './LevelsBlock.styled';

export const LevelsBlock = ({ item }) => {
  const { levels } = item;
  return (
    <LevelsList>
      {levels.map((level, index) => (
        <LevelsItem key={index}>{level}</LevelsItem>
      ))}
    </LevelsList>
  );
};
