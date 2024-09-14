import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseAntennaLight = ({
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
      strokeWidth={1.5}
      d="M10.55 9.09c4.15 0 7.515-1.358 7.515-3.032s-3.364-3.032-7.515-3.032-7.515 1.358-7.515 3.032S6.4 9.09 10.55 9.09Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.035 11.97v5.962s0 2.981 7.532 2.981M18.067 11.97V6.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.035 6.008v5.962s0 2.981 7.532 2.981"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.498 20.973v-1.988M17.48 20.974v-3.975M20.461 20.973v-5.962"
    />
  </Svg>
);
export default IconlystDatabaseAntennaLight;
