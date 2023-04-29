import { TypeMode } from 'features/hooks/useColorsGradient';
import styled from 'styled-components/native';

export const Container = styled.View<{ type: TypeMode }>`
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme, type }) =>
    type === 'dark' ? theme.colors.blueCard : theme.colors.blueWhiteCard};
  padding: 12px 16px;
  margin-top: 20px;
`;

export const HeaderToday = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;
