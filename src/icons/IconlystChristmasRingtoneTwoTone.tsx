import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasRingtoneTwoTone = ({
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
      d="M19.301 17.28c.37 1.495-2.333 3.449-6.036 4.366-3.704.916-7.006.448-7.376-1.046s2.333-3.448 6.036-4.365c3.704-.916 7.006-.448 7.376 1.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.012 19.684c2.278-3.99-1.74-10.613 3.334-12.12 5.617-1.256 5.526 6.566 9.571 9.079"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.348 17.188c.416 2.441 5.125 2.856 5.18-1.267"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.11 7.051c-.492-1.728.31-3.47 1.791-3.89.638-.181 1.3.188 1.482.826.395 1.391-1.001 3.008-3.12 3.61s-4.157-.04-4.552-1.43a1.2 1.2 0 0 1 .827-1.483c1.48-.42 3.078.64 3.569 2.368M8.827 10.986l.694-3.224c1.574-.083.798 2.874 2.314 3.419"
    />
  </Svg>
);
export default IconlystChristmasRingtoneTwoTone;
