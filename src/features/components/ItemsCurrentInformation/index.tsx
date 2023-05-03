import React from 'react';
import { Container } from './styles';

import RainIconSvg from 'assets/icons/raindrops.svg';
import HumidityIconSvg from 'assets/icons/humidity.svg';
import WindSpeedIconSvg from 'assets/icons/windSpeed.svg';

import { Spacer } from 'global/components/Spacer';
import Text from 'global/components/Text';

const icons = {
  rain: <RainIconSvg />,
  humidity: <HumidityIconSvg />,
  windSpeed: <WindSpeedIconSvg />,
};

type Icons = 'rain' | 'humidity' | 'windSpeed';

interface Props {
  icon: Icons;
  value: string;
}

export function ItemsCurrentInformation({ icon, value }: Props) {
  return (
    <Container>
      {icons[icon]}
      <Spacer width={5} />
      <Text variant="SFProDisplayBold" fontSize={14}>
        {value}
      </Text>
    </Container>
  );
}
