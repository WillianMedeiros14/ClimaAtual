import React from 'react';
import { Container, FeaturedImage, Row } from './styles';
import Text from 'global/components/Text';
import { Spacer } from 'global/components/Spacer';

import FeaturedImg from 'assets/images/SuncloudAngledRain.png';
import { ItemsCurrentInformation } from '../ItemsCurrentInformation';

export function CurrentInformation() {
  return (
    <Container>
      <FeaturedImage source={FeaturedImg} />
      <Text variant="SFProDisplaySemibold" fontSize={64}>
        28°
      </Text>
      <Spacer height={5} />
      <Text variant="SFProDisplayRegular">Precipitations</Text>
      <Text variant="SFProDisplayRegular">{'Max.: 31º  Min.: 25º'}</Text>

      <Spacer height={31} />

      <Row>
        <ItemsCurrentInformation icon="rain" value="6%" />

        <ItemsCurrentInformation icon="humidity" value="90%" />

        <ItemsCurrentInformation icon="windSpeed" value="19km/h" />
      </Row>
    </Container>
  );
}
