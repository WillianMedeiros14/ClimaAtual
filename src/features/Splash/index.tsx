import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import DayImage from 'assets/images/splash/day.jpg';
import NightImage from 'assets/images/splash/night.jpg';

import { Circle, Container, ImageBackground } from './styles';
import { getDayOrNight } from 'features/utils/getDayOrNigh';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from 'global/components/Spacer';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const CircleAnimation = Animated.createAnimatedComponent(Circle);

export function Splash() {
  const insets = useSafeAreaInsets();
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    setInterval(() => {
      if (rotation.value === 360) {
        rotation.value = 20;
      } else {
        rotation.value = rotation.value + 20;
      }
    }, 60);
  }, []);

  return (
    <Container>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />

      <ImageBackground source={getDayOrNight() === 'day' ? DayImage : NightImage}>
        <CircleAnimation style={[animatedStyle]} />
        <Spacer height={insets.bottom + 30} />
      </ImageBackground>
    </Container>
  );
}
