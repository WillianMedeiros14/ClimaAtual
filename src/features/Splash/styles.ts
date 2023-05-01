import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

export const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-self: center;
  border-right-width: 2px;
  /* border-top-color: transparent;
  border-bottom-color: transparent; */
  /* border-left-color: ${({ theme }) => theme.colors.blueDark100}; */
  border-right-color: ${({ theme }) => theme.colors.white};
`;
