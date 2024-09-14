import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortUpOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.748 5.977c.2 0 .39.079.531.22l3.051 3.065a.75.75 0 0 1-1.063 1.058l-1.77-1.777v5.78a.75.75 0 0 1-1.5 0v-5.78L5.23 10.32a.75.75 0 1 1-1.063-1.058l3.05-3.065a.75.75 0 0 1 .532-.22M13.293 7.242a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-6.456a.75.75 0 0 1-.75-.75m0 5.876a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-6.456a.75.75 0 0 1-.75-.75M3.75 18.803a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortUpOutline;
