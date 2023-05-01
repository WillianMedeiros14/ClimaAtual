import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { BackgroundGradient, Container, ScrollView } from './styles';
import { StatusBar } from 'react-native';
import { Header } from 'features/components/Header';
import { CurrentInformation } from 'features/components/CurrentInformation';
import { Today } from 'features/components/Today';
import { NextForecast } from 'features/components/NextForecast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from 'global/components/Spacer';
import useColorsGradient, { TypeMode } from 'features/hooks/useColorsGradient';

import useGetDataWeather from 'features/hooks/useGetDataWeather';
import Text from 'global/components/Text';
import { getDayOrNight } from 'features/utils/getDayOrNigh';

export default function Home() {
  const insets = useSafeAreaInsets();
  const { getColorGradient } = useColorsGradient();

  const { getWeather, loading, weather } = useGetDataWeather();

  const [type, setType] = useState<TypeMode>('sunny');

  useEffect(() => {
    setType(getDayOrNight());
    getWeather();
  }, []);

  return (
    <Container>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
      <BackgroundGradient
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.3, 0.8]}
        colors={getColorGradient(type)}>
        {loading ? (
          <Text variant="SFProDisplayRegular">Loading</Text>
        ) : (
          <>
            <Header cityName={weather.city_name} />

            <ScrollView
              refreshControl={<RefreshControl refreshing={loading} onRefresh={getWeather} />}>
              <CurrentInformation
                type={type}
                humidity={weather.humidity}
                temperature={weather.temp}
                rain={weather.forecast?.[0].rain_probability}
                windSpeedy={weather.wind_speedy}
                min={weather.forecast?.[0].min}
                max={weather.forecast?.[0].max}
              />
              <Today type={type} date={weather?.date} />

              {weather.forecast?.length > 0 ? (
                <NextForecast type={type} forecast={weather.forecast} />
              ) : null}

              <Spacer height={insets.bottom + 20} />
            </ScrollView>
          </>
        )}
      </BackgroundGradient>
    </Container>
  );
}
