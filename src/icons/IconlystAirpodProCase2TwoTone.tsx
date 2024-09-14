import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase2TwoTone = ({
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
      d="M16.376 4H8.623A5.123 5.123 0 0 0 3.5 9.122v6.2a5.124 5.124 0 0 0 5.123 5.123h7.753a5.123 5.123 0 0 0 5.122-5.124V9.122A5.12 5.12 0 0 0 16.376 4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.502 9.931H21.5M12.502 14.08v.048m.194-.038a.196.196 0 1 1-.391 0 .196.196 0 0 1 .391 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirpodProCase2TwoTone;
