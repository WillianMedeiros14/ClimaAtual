import React from 'react';
import { Container, Content, HeaderToday } from './styles';
import Text from 'global/components/Text';
import { ItemsToday } from '../ItemsToday';
import { TypeMode } from 'features/hooks/useColorsGradient';
import { formatDate } from 'features/utils/date';

interface Props {
  type: TypeMode;
  date: string;
}

export function Today({ type, date }: Props) {
  if (date === undefined) {
    return null;
  }

  return (
    <Container type={type}>
      <HeaderToday>
        <Text variant="SFProDisplayBold" fontSize={20}>
          Today
        </Text>

        <Text variant="SFProDisplayRegular"> {formatDate(date)}</Text>
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
