import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase1Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.877 4H8.124A5.123 5.123 0 0 0 3 9.123v6.2a5.124 5.124 0 0 0 5.124 5.123h7.753A5.123 5.123 0 0 0 21 15.322v-6.2A5.12 5.12 0 0 0 15.877 4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.432 9.93v1.034c0 1.172-.95 2.122-2.122 2.122H9.693a2.12 2.12 0 0 1-2.12-2.122V9.931M3 9.93h18"
    />
  </Svg>
);
export default IconlystAirpodProCase1Light;
