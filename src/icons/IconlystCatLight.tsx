import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.031 4.737a2.475 2.475 0 0 0-2.649 1.58c-.298.727-1.093 1.113-1.81 1.113-.195.79.43 2.448 1.81 2.448 1.04 0 1.976.83 2.02 2.104l.045 9.567h-1.96M9.532 21.55l8.867-.084c2.509 0 4.009-4.65 1.381-7.823"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.175 5.238V3.05c2.56 1.06 4.464 2.968 4.464 5.992v1.6m-.521.024c3.067 0 8.45 3.323 5.447 10.757M12.74 21.525c-1.59-.326-3.67-3.245-.696-5.872M7.032 7.625v.01"
    />
  </Svg>
);
export default IconlystCatLight;
