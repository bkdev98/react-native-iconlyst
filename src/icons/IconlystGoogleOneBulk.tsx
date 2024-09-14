import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOneBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.778 5.411v.03c-.02.77-.34 1.48-.89 2.01l-4.86 4.61v-6.65a2.88 2.88 0 0 1 2.88-2.88c1.47 0 2.69 1.12 2.86 2.55 0 .11.01.22.01.33"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.768 5.082a2.895 2.895 0 0 0-2.86-2.55 2.88 2.88 0 0 0-2.88 2.88v6.65l-.95.9c-.54.51-1.24.79-1.99.79h-.06a2.86 2.86 0 0 1-2.02-.89 2.886 2.886 0 0 1 .11-4.07l5.81-5.52a2.874 2.874 0 0 1 4.06.11c.45.47.72 1.07.78 1.7" />
      <Path d="M17.778 5.442v13.19c0 1.58-1.29 2.88-2.87 2.88-1.59 0-2.88-1.3-2.88-2.88v-6.57l4.86-4.61c.55-.53.87-1.24.89-2.01" />
    </G>
  </Svg>
);
export default IconlystGoogleOneBulk;
