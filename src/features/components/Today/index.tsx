import React from 'react';
import { Container, Content, HeaderToday } from './styles';
import Text from 'global/components/Text';
import { ItemsToday } from '../ItemsToday';

export function Today() {
  return (
    <Container>
      <HeaderToday>
        <Text variant="SFProDisplayBold" fontSize={20}>
          Today
        </Text>

        <Text variant="SFProDisplayRegular">Mar, 9</Text>
      </HeaderToday>

      <Content>
        <ItemsToday isActive={false} />

        <ItemsToday isActive={false} />

        <ItemsToday isActive={true} />

        <ItemsToday isActive={false} />
      </Content>
    </Container>
  );
}
