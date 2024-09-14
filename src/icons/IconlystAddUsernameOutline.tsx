import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUsernameOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12.001c0-5.385 4.365-9.751 9.749-9.751 5.38 0 9.751 4.27 9.751 9.75 0 1.224-.284 2.3-.88 3.09-.612.813-1.511 1.259-2.57 1.259a3.45 3.45 0 0 1-3.45-3.45V8.641a.75.75 0 0 1 1.5 0V12.9a1.95 1.95 0 0 0 1.95 1.95c.6 0 1.051-.235 1.373-.662.34-.45.577-1.174.577-2.187 0-4.642-3.69-8.25-8.251-8.25a8.25 8.25 0 0 0-8.249 8.251.75.75 0 0 1-1.5 0m15.443 7.01a.75.75 0 0 1-.196 1.042 9.74 9.74 0 0 1-7.823 1.417.75.75 0 1 1 .357-1.456 8.28 8.28 0 0 0 6.62-1.2.75.75 0 0 1 1.042.197"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.15a2.85 2.85 0 1 0 .001 5.7 2.85 2.85 0 0 0 0-5.7M7.65 12a4.35 4.35 0 1 1 8.702 0 4.35 4.35 0 0 1-8.702 0M5.51 14.294a.75.75 0 0 1 .75.75v1.76h1.76a.75.75 0 0 1 0 1.5H6.26v1.76a.75.75 0 0 1-1.5 0v-1.76H3a.75.75 0 0 1 0-1.5h1.76v-1.76a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddUsernameOutline;
