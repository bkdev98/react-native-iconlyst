import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseAddTwoTone = ({
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
      d="m17.736 18.799-2.247-.001m2.247 0 .001 2.247zm0 0v-2.245zm0 0h2.245zM3.99 11.67s0 2.89 7.301 2.89c1.447 0 2.607-.114 3.537-.296"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.592 11.67V5.89M3.99 5.907V17.45s0 2.891 7.301 2.891"
    />
    <Ellipse
      cx={11.291}
      cy={5.908}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7.301}
      ry={2.908}
    />
  </Svg>
);
export default IconlystDatabaseAddTwoTone;
