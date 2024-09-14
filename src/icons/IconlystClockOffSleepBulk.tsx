import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockOffSleepBulk = ({
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
      fillRule="evenodd"
      d="M20.48 10.911a5.627 5.627 0 0 1-5.28-7.57.306.306 0 0 0-.186-.402A9.4 9.4 0 0 0 12.19 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5q-.001-.446-.048-.88a.31.31 0 0 0-.355-.267 6 6 0 0 1-.808.058"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.699 8.1h-3.49a.749.749 0 0 1-.555-1.254l2.353-2.596h-1.798a.75.75 0 0 1 0-1.5h3.49a.751.751 0 0 1 .556 1.254L19.9 6.6h1.798a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.681 14.956a.75.75 0 0 1-1.028.258l-3.175-1.9a.75.75 0 0 1-.365-.644V8.581a.75.75 0 1 1 1.5 0v3.664l2.81 1.682a.75.75 0 0 1 .258 1.029"
    />
  </Svg>
);
export default IconlystClockOffSleepBulk;
