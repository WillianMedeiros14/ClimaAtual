import React from 'react';
import { Container, Content, Notification, NotificationSignaling } from './style';

import Text from 'global/components/Text';
import { Spacer } from 'global/components/Spacer';

import LocationIconSvg from 'assets/icons/location.svg';
import DownArrowIconSvg from 'assets/icons/downArrow.svg';

import NotificationIconSvg from 'assets/icons/notification.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <LocationIconSvg />
        <Spacer width={12} />
        <Text variant="SFProDisplaySemibold">Fortaleza</Text>

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
