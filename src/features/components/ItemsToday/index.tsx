import React from 'react';
import { Container } from './styles';

import Text from 'global/components/Text';

import Icon from 'assets/images/IconNuvem.svg';

interface Props {
  isActive: boolean;
}

export function ItemsToday({ isActive }: Props) {
  return (
    <Container isActive={isActive}>
      <Text variant="SFProDisplayRegular">29°C</Text>

      <Icon />

      <Text variant="SFProDisplayRegular">15.00</Text>
    </Container>
  );
}
