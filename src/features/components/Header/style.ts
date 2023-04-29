import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Notification = styled.View`
  position: relative;
`;

export const NotificationSignaling = styled.View`
  width: 11.15px;
  height: 11.15px;
  background-color: ${({ theme }) => theme.colors.red};
  position: absolute;
  border-width: 1.4px;
  border-color: ${({ theme }) => theme.colors.blueWhite100};
  border-radius: 6px;
  right: 0;
  top: 2px;
`;
