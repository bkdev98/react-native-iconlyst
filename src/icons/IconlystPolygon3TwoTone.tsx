import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon3TwoTone = ({
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
      d="M9.71 3c-.599 0-1.174.237-1.597.662M15.292 3c.598 0 1.172.237 1.596.662m3.951 3.95c.424.424.661.998.661 1.598m0 5.58c0 .6-.237 1.174-.66 1.597m-3.952 3.951a2.26 2.26 0 0 1-1.597.662M9.71 21a2.26 2.26 0 0 1-1.597-.662m-3.951-3.95A2.26 2.26 0 0 1 3.5 14.79m0-5.58c0-.6.238-1.174.662-1.597"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.71 3h5.581m1.597.662 3.951 3.95M21.5 9.21v5.58m-.66 1.597-3.952 3.951M15.291 21H9.71m-1.597-.662-3.951-3.95M3.5 14.79V9.21m.662-1.597 3.95-3.951"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPolygon3TwoTone;
