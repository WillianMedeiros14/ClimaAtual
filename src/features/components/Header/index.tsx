import React from 'react';
import { Container, Content, Notification, NotificationSignaling } from './style';

import Text from 'global/components/Text';
import { Spacer } from 'global/components/Spacer';

import LocationIconSvg from 'assets/icons/location.svg';
import DownArrowIconSvg from 'assets/icons/downArrow.svg';

import NotificationIconSvg from 'assets/icons/notification.svg';

interface Props {
  cityName: string;
}

export function Header({ cityName }: Props) {
  return (
    <Container>
      <Content>
        <LocationIconSvg />
        <Spacer width={12} />
        <Text variant="SFProDisplaySemibold">{cityName}</Text>

        <Spacer width={20} />
        <DownArrowIconSvg />
      </Content>

      <Content>
        <Notification>
          <NotificationIconSvg />
          <NotificationSignaling />
        </Notification>
      </Content>
    </Container>
  );
}
