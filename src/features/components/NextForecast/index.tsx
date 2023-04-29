import React from 'react';

import { Container } from '../Today/styles';
import { HeaderNextForecast } from './styles';

import Text from 'global/components/Text';

import CalendarIconSvg from 'assets/icons/calendar.svg';
import { ItemsNextForecast } from '../ItemsNextForecast';

export function NextForecast() {
  return (
    <Container>
      <HeaderNextForecast>
        <Text variant="SFProDisplayBold" fontSize={20}>
          Next Forecast
        </Text>

        <CalendarIconSvg />
      </HeaderNextForecast>

      <ItemsNextForecast />

      <ItemsNextForecast />
    </Container>
  );
}
