import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseAntennaTwoTone = ({
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
      strokeWidth={1.5}
      d="M11.05 9.09c4.15 0 7.515-1.358 7.515-3.032s-3.364-3.032-7.515-3.032-7.515 1.358-7.515 3.032S6.9 9.09 11.05 9.09Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.535 6.106v11.826s0 2.982 7.532 2.982M18.567 11.97V6.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.535 11.97s0 2.98 7.532 2.98"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.998 20.973v-1.988M17.98 20.974v-3.975M20.961 20.973v-5.962"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseAntennaTwoTone;
