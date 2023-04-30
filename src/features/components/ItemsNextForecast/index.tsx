import React from 'react';
import { Container, ContentRight, Icon, ItemsRight } from './styles';
import Text from 'global/components/Text';
import { Spacer } from 'global/components/Spacer';

import RainSvg from 'assets/icons/rain.svg';
import ClearDaySvg from 'assets/icons/clear_day.svg';
import CloudlyDaySvg from 'assets/icons/cloudly_day.svg';

export type TypeCondition = 'rain' | 'clear_day' | 'cloudly_day';

const iconsCondition = {
  rain: <RainSvg width={30} height={30} />,
  clear_day: <ClearDaySvg width={30} height={30} />,
  cloudly_day: <CloudlyDaySvg width={30} height={30} />,
};

interface Props {
  weekday: string;
  date: string;
  max: number;
  min: number;
  condition: TypeCondition;
}

export function ItemsNextForecast({ weekday, date, max, min, condition }: Props) {
  return (
    <Container>
      <Text variant="AlegreyaSansBold">
        {weekday} {' - '}
        <Text variant="AlegreyaSansMedium" fontSize={15}>
          {date}
        </Text>
      </Text>

      {iconsCondition[condition]}

      <ContentRight>
        <ItemsRight>
          <Text variant="AlegreyaSansMedium">{max}</Text>
          <Text
            variant="AlegreyaSansMedium"
            fontSize={10}
            style={{
              marginTop: 5.5,
            }}>
            °C
          </Text>
        </ItemsRight>

        <Spacer width={10} />

        <ItemsRight>
          <Text variant="AlegreyaSansMedium" color="white50">
            {min}
          </Text>
          <Text
            variant="AlegreyaSansMedium"
            color="white50"
            fontSize={10}
            style={{
              marginTop: 5.5,
            }}>
            °C
          </Text>
        </ItemsRight>
      </ContentRight>
    </Container>
  );
}
