import React, { ReactNode } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { spacing } from 'theme';
import { colors } from 'theme/colors';
import { ISpacing, IStyleTopography, ITypecolors } from 'theme/typesTheme';
import { typography } from 'theme/typography';

type IStylesProps = TextStyle & TextProps;

interface Props extends IStylesProps {
  children: ReactNode;
  variant: IStyleTopography;
  color?: ITypecolors;
  padding?: ISpacing;
  paddingTop?: ISpacing;
  paddingRight?: ISpacing;
  paddingBottom?: ISpacing;
  paddingLeft?: ISpacing;
  paddingHorizontal?: ISpacing;
  marginLeft?: ISpacing;
  marginTop?: ISpacing;
  marginRight?: ISpacing;
  marginBottom?: ISpacing;
}

export default function Text({
  children,
  variant,
  color,
  fontSize,
  textTransform,
  textAlign,
  textDecorationLine,
  padding = 'none',
  paddingTop = 'none',
  paddingRight = 'none',
  paddingBottom = 'none',
  paddingLeft = 'none',
  marginLeft = 'none',
  marginTop = 'none',
  marginRight = 'none',
  marginBottom = 'none',
  paddingHorizontal = 'none',
  fontWeight,
  style,
  ...rest
}: Props) {
  return (
    <RNText
      {...rest}
      style={[
        {
          fontSize: fontSize ? fontSize : typography[variant].fontSize,
          fontFamily: typography[variant].fontFamily,
          color: color ? colors[color] : typography[variant].color,
          textTransform,
          textAlign,
          textDecorationLine,
          padding: spacing[padding],
          paddingTop: spacing[paddingTop],
          paddingRight: spacing[paddingRight],
          paddingBottom: spacing[paddingBottom],
          paddingLeft: spacing[paddingLeft],
          marginLeft: spacing[marginLeft],
          marginTop: spacing[marginTop],
          marginRight: spacing[marginRight],
          marginBottom: spacing[marginBottom],
          paddingHorizontal: spacing[paddingHorizontal],
          fontWeight,
        },
        style && style,
      ]}>
      {children}
    </RNText>
  );
}
