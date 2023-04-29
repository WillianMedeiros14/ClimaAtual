import React from 'react';
import { Container, Content, HeaderToday } from './styles';
import Text from 'global/components/Text';
import { ItemsToday } from '../ItemsToday';
import { TypeMode } from 'features/hooks/useColorsGradient';

interface Props {
  type: TypeMode;
}

export function Today({ type }: Props) {
  return (
    <Container type={type}>
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
