import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase2Broken = ({
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
      d="M15.876 20.445a5.123 5.123 0 0 0 5.122-5.124V9.122A5.12 5.12 0 0 0 15.876 4H8.123A5.123 5.123 0 0 0 3 9.122v6.2a5.124 5.124 0 0 0 5.123 5.123H12M5.994 9.931H21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 14.08v.048m.194-.038a.196.196 0 1 1-.391 0 .196.196 0 0 1 .391 0"
    />
  </Svg>
);
export default IconlystAirpodProCase2Broken;
