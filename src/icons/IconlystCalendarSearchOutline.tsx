import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSearchOutline = ({
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
      fill={props.color}
      d="M16.226 6.704a.75.75 0 0 1-.75-.75V2.992a.75.75 0 1 1 1.5 0v2.962a.75.75 0 0 1-.75.75M8.954 6.704a.75.75 0 0 1-.75-.75V2.992a.75.75 0 0 1 1.5 0v2.962a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M11.004 21.74H8.785a4.662 4.662 0 0 1-5.044-5V8.593c0-3.04 1.933-4.93 5.044-4.93h7.62a5.12 5.12 0 0 1 3.73 1.355 4.9 4.9 0 0 1 1.3 3.577v3.023a.75.75 0 0 1-1.5 0V8.592a3.42 3.42 0 0 0-.867-2.516 3.67 3.67 0 0 0-2.669-.913H8.778c-2.285 0-3.544 1.218-3.544 3.429v8.145a3.18 3.18 0 0 0 3.544 3.5h2.226a.75.75 0 0 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M16.833 10.643h-8.5a.75.75 0 1 1 0-1.5h8.5a.75.75 0 1 1 0 1.5M16.622 21.077a3.59 3.59 0 1 1 0-7.18 3.59 3.59 0 0 1 0 7.18m0-5.682a2.09 2.09 0 1 0 1.479.61 2.1 2.1 0 0 0-1.479-.613z"
    />
    <Path
      fill={props.color}
      d="M19.988 21.743a.74.74 0 0 1-.53-.22l-1.43-1.431a.752.752 0 0 1 .231-1.244.75.75 0 0 1 .83.184l1.429 1.427a.75.75 0 0 1-.53 1.28z"
    />
  </Svg>
);
export default IconlystCalendarSearchOutline;
