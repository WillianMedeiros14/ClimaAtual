import { TypeMode } from 'features/hooks/useColorsGradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const FeaturedImage = styled.Image`
  width: 284px;
  height: 207px;
  align-self: center;
`;

export const Row = styled.View<{ type: TypeMode }>`
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme, type }) =>
    type === 'dark' ? theme.colors.blueCard : theme.colors.blueWhiteCard};
  padding: 12px;
  flex-direction: row;
  justify-content: space-around;
`;
