import React, { createContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type PaintFunction = (color: string) => React.ReactNode | null;

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export type IconlystProps = {
  color?: string;
  size?: string | number;
  style?: StyleProp<ViewStyle>;
  mirrored?: boolean;
  testID?: string;
} & SvgProps & SVGRProps;

export type Iconlyst = React.FC<IconlystProps>;

export const IconlystContext = createContext<IconlystProps>({
  color: 'currentColor',
  size: 24,
  mirrored: false,
});
