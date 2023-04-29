import { useTheme } from 'styled-components';

export type TypeMode = 'dark' | 'white' | 'sunny';

export default function useColorsGradient() {
  const theme = useTheme();

  const colorsGradient = {
    white: [theme.colors.blueWhite100, theme.colors.blueWhite80, theme.colors.blueWhite60],
    dark: [theme.colors.blueDark100, theme.colors.blueDark60, theme.colors.blueDark80],
    sunny: ['#94DBDF', '#6DB4C2', '#657AAA'],
  };

  function getColorGradient(type: TypeMode) {
    return colorsGradient[type];
  }

  return {
    getColorGradient,
  };
}
