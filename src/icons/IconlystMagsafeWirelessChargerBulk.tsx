import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagsafeWirelessChargerBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M11.871 20.875v-3.138h1.5v3.138a.75.75 0 1 1-1.5 0"
      opacity={0.4}
    />
    <Circle cx={12.621} cy={10.074} r={7.699} fill={props.color} />
  </Svg>
);
export default IconlystMagsafeWirelessChargerBulk;
