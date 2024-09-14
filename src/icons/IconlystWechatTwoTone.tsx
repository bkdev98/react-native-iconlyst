import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWechatTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.466 10.644a6 6 0 0 0 .037-.644c0-3.441-3.135-6.23-7.002-6.23S2.5 6.559 2.5 10c0 1.858.914 3.526 2.364 4.668.306.24.477.625.403 1.008l-.303 1.583a.191.191 0 0 0 .289.199l2.02-1.245c.22-.135.483-.174.735-.125a7.9 7.9 0 0 0 3.245-.054"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.217 15.448c0 2.642 2.302 4.784 5.141 4.784.778 0 1.515-.16 2.175-.448.715-.31 1.78.074 2.502.199-.088-.769-.362-1.81 0-2.544a4.5 4.5 0 0 0 .465-1.991c0-2.642-2.302-4.784-5.142-4.784s-5.141 2.142-5.141 4.784Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.22 8.246h.006m4.55 0h.007M17.933 14.258h.009m-3.167 0h.01"
    />
  </Svg>
);
export default IconlystWechatTwoTone;
