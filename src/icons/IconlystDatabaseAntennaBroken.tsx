import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseAntennaBroken = ({
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
      strokeWidth={1.5}
      d="M10.55 3.027c-4.15 0-7.515 1.358-7.515 3.032S6.4 9.091 10.55 9.091s7.515-1.358 7.515-3.032c0-1.193-1.708-2.225-4.191-2.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.035 15.762v2.17s0 2.981 7.532 2.981M18.067 11.97V6.008M3.035 6.008v5.962s0 2.981 7.532 2.981"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.498 20.972v-1.988M17.48 20.975V17M20.461 20.974v-5.962"
    />
  </Svg>
);
export default IconlystDatabaseAntennaBroken;
