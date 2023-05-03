import React from 'react';

import { Container } from '../Today/styles';
import { HeaderNextForecast } from './styles';

import Text from 'global/components/Text';

import CalendarIconSvg from 'assets/icons/calendar.svg';
import { ItemsNextForecast } from '../ItemsNextForecast';
import { TypeMode } from 'features/hooks/useColorsGradient';
import { IForecast } from 'features/services/getData.service';

interface Props {
  type: TypeMode;
  forecast: IForecast[];
}

export function NextForecast({ type, forecast }: Props) {
  return (
    <Container type={type}>
      <HeaderNextForecast>
        <Text variant="SFProDisplayBold" fontSize={20}>
          Next Forecast
        </Text>

        <CalendarIconSvg />
      </HeaderNextForecast>

      {forecast.map((itemForecast, index) => {
        if (index > 0) {
          return (
            <ItemsNextForecast
              key={itemForecast.date}
              weekday={itemForecast.weekday}
              date={itemForecast.date}
              max={itemForecast.max}
              min={itemForecast.min}
              condition={itemForecast.condition}
            />
          );
        }
      })}
    </Container>
  );
}
