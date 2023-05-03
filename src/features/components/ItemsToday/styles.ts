import styled from 'styled-components/native';

export const Container = styled.View<{ isActive: boolean }>`
  height: 155px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blueDarkItemsToday : 'transparent'};
  border-width: 1px;
  border-color: ${({ isActive }) => (isActive ? '#5096FF' : 'transparent')};
`;
