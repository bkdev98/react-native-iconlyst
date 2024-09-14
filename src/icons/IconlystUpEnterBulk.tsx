import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpEnterBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="m14.812 8.721-2.28-2.28a.75.75 0 0 0-1.062 0l-2.28 2.28a.75.75 0 0 0 .566 1.28v.002h1.495v3.706h1.5v-3.706h1.612v-.006a.747.747 0 0 0 .668-.746.75.75 0 0 0-.22-.53"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M3.15 8.77V6.969a4.355 4.355 0 0 1 4.35-4.35h9a4.354 4.354 0 0 1 4.35 4.35v1.8a.75.75 0 0 1-1.5 0v-1.8a2.85 2.85 0 0 0-2.85-2.85h-9a2.85 2.85 0 0 0-2.85 2.85v1.8a.75.75 0 0 1-1.5 0M17.601 13.708h-11.2c-1.655 0-3 1.346-3 3v2.17c0 1.655 1.345 3 3 3h11.2c1.654 0 3-1.345 3-3v-2.17c0-1.654-1.346-3-3-3" />
    </G>
  </Svg>
);
export default IconlystUpEnterBulk;
