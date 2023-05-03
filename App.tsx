import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
