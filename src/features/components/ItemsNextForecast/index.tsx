import React from 'react';
import { Container, ContentRight, Icon, ItemsRight } from './styles';
import Text from 'global/components/Text';
import { Spacer } from 'global/components/Spacer';

import BigRainDropsImage from 'assets/images/BigRainDrops.png';

export function ItemsNextForecast() {
  return (
    <Container>
      <Text variant="AlegreyaSansBold">Monday</Text>

      <Icon source={BigRainDropsImage} />

      <ContentRight>
        <ItemsRight>
          <Text variant="AlegreyaSansMedium">13</Text>
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

        <Spacer width={10} />

        <ItemsRight>
          <Text variant="AlegreyaSansMedium">10</Text>
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
