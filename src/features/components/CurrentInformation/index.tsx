import React from 'react';
import { Container, FeaturedImage, Row } from './styles';
import Text from 'global/components/Text';
import { Spacer } from 'global/components/Spacer';

import FeaturedImg from 'assets/images/SuncloudAngledRain.png';
import { ItemsCurrentInformation } from '../ItemsCurrentInformation';
import { TypeMode } from 'features/hooks/useColorsGradient';

interface Props {
  type: TypeMode;
  temperature: number;
  rain: number;
  windSpeedy: string;
  humidity: number;
  min: number;
  max: number;
}

export function CurrentInformation({
  type,
  temperature,
  rain,
  windSpeedy,
  humidity,
  min,
  max,
}: Props) {
  return (
    <Container>
      <FeaturedImage source={FeaturedImg} />
      <Text variant="SFProDisplaySemibold" fontSize={64}>
        {temperature}°
      </Text>
      <Spacer height={5} />
      <Text variant="SFProDisplayRegular">Precipitations</Text>
      <Text variant="SFProDisplayRegular">{`Max.: ${max}º  Min.: ${min}º`}</Text>

      <Spacer height={31} />

      <Row type={type}>
        <ItemsCurrentInformation icon="rain" value={`${rain}%`} />

        <ItemsCurrentInformation icon="humidity" value={`${humidity}%`} />

        <ItemsCurrentInformation icon="windSpeed" value={windSpeedy} />
      </Row>
    </Container>
  );
}
