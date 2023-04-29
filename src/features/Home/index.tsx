import React from 'react';
import { BackgroundGradient, Container, ScrollView } from './styles';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { Header } from 'features/components/Header';
import { CurrentInformation } from 'features/components/CurrentInformation';
import { Today } from 'features/components/Today';
import { NextForecast } from 'features/components/NextForecast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from 'global/components/Spacer';

export default function Home() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Container>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
      <BackgroundGradient
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.3, 0.8]}
        colors={[theme.colors.blueDark100, theme.colors.blueDark60, theme.colors.blueDark80]}>
        <Header />

        <ScrollView>
          <CurrentInformation />
          <Today />
          <NextForecast />

          <Spacer height={insets.bottom + 20} />
        </ScrollView>
      </BackgroundGradient>
    </Container>
  );
}
