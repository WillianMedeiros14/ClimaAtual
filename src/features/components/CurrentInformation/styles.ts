import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const FeaturedImage = styled.Image`
  width: 284px;
  height: 207px;
  align-self: center;
`;

export const Row = styled.View`
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blueCard};
  padding: 12px;
  flex-direction: row;
  justify-content: space-around;
`;
