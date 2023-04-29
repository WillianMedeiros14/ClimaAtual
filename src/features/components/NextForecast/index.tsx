import React from 'react';

import { Container } from '../Today/styles';
import { HeaderNextForecast } from './styles';

import Text from 'global/components/Text';

import CalendarIconSvg from 'assets/icons/calendar.svg';
import { ItemsNextForecast } from '../ItemsNextForecast';
import { TypeMode } from 'features/hooks/useColorsGradient';

interface Props {
  type: TypeMode;
}

export function NextForecast({ type }: Props) {
  return (
    <Container type={type}>
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
