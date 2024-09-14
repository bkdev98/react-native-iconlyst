import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon3Broken = ({
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
      d="M11.6 21h3.691c.598 0 1.172-.237 1.597-.661l3.951-3.951c.423-.424.66-.998.66-1.597V9.21c0-.6-.237-1.173-.66-1.597l-1.976-1.975M15.292 3H9.71c-.599 0-1.174.237-1.597.662l-3.951 3.95A2.26 2.26 0 0 0 3.5 9.21v5.58c0 .6.238 1.174.662 1.597l3.95 3.951"
    />
  </Svg>
);
export default IconlystPolygon3Broken;
