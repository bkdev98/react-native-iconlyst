import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftEnterBulk = ({
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
      d="m8.47 15.062-2.28-2.28a.75.75 0 0 1 0-1.062l2.28-2.28a.75.75 0 0 1 1.28.566h.003V11.5h3.706V13H9.753v1.612h-.006a.75.75 0 0 1-.746.668.75.75 0 0 1-.53-.22"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M8.52 3.4h-1.8a4.355 4.355 0 0 0-4.35 4.35v9a4.354 4.354 0 0 0 4.35 4.35h1.8a.75.75 0 0 0 0-1.5h-1.8a2.85 2.85 0 0 1-2.85-2.85v-9A2.85 2.85 0 0 1 6.72 4.9h1.8a.75.75 0 0 0 0-1.5M13.459 17.851v-11.2c0-1.655 1.346-3 3-3h2.17c1.654 0 3 1.345 3 3v11.2c0 1.654-1.346 3-3 3h-2.17c-1.654 0-3-1.346-3-3" />
    </G>
  </Svg>
);
export default IconlystLeftEnterBulk;
