import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDecredLight = ({
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
      d="m16.823 19.02-5.196-5.265h3.37c1.667 0 3.071-1.404 3.071-3.072s-1.404-3.072-3.072-3.072H13.68L11.047 4.98h3.95a5.694 5.694 0 0 1 5.704 5.704 5.74 5.74 0 0 1-3.072 5.09L21 19.022z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.176 4.979 5.196 5.265h-3.37c-1.667 0-3.071 1.404-3.071 3.072s1.404 3.072 3.071 3.072h1.317l2.633 2.633h-3.95a5.694 5.694 0 0 1-5.704-5.705 5.74 5.74 0 0 1 3.072-5.09L3 4.978z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDecredLight;
