import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.colors.blueCard};
  flex-direction: row;
  justify-content: space-around;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
