import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase1TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.377 4H8.624A5.123 5.123 0 0 0 3.5 9.123v6.2a5.124 5.124 0 0 0 5.124 5.123h7.753a5.123 5.123 0 0 0 5.123-5.124v-6.2A5.12 5.12 0 0 0 16.377 4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.932 9.93v1.034c0 1.172-.95 2.122-2.122 2.122h-4.617a2.12 2.12 0 0 1-2.12-2.122V9.931m-4.573 0h18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirpodProCase1TwoTone;
