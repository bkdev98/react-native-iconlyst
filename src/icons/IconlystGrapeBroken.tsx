import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrapeBroken = ({
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
      d="M14.186 8.992A2.57 2.57 0 0 0 12 7.792a2.57 2.57 0 0 0-2.177 1.19c-.262.407-.417.89-.417 1.404 0 .512.155.996.417 1.403.048.086.106.164.164.242.446.532 1.094.89 1.83.938.113.02.25.02.366 0a2.6 2.6 0 0 0 1.83-.938 6 6 0 0 0 .173-.242 2.67 2.67 0 0 0 .407-1.403 2.55 2.55 0 0 0-.407-1.394m0 0v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.636 7.793a2.593 2.593 0 0 0 0 5.186c.058 0 .126 0 .184-.01a2.6 2.6 0 0 0 2.003-1.18M16.365 7.793a2.593 2.593 0 0 1 0 5.186c-.068 0-.126 0-.184-.01a2.57 2.57 0 0 1-1.82-.938 1.4 1.4 0 0 1-.174-.242M12.185 12.97a2.53 2.53 0 0 0-.6 1.644c0 .481.133 1.007.416 1.403a2.57 2.57 0 0 0 2.177 1.19h.01a2.6 2.6 0 0 0 2.548-2.103"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.821 12.97a2.53 2.53 0 0 0-.6 1.644c0 1.345 1.036 2.448 2.351 2.584.078.01.165.01.252.01a2.57 2.57 0 0 0 2.177-1.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.572 17.198c-.184.358-.29.774-.29 1.21a2.601 2.601 0 0 0 4.898 1.205M12.002 7.79s.132-3.116 3.188-3.67"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.199 6.744h-.854c-1.77 0-2.964-1.12-2.964-2.89V3h.853c1.77 0 2.965 1.12 2.965 2.89z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrapeBroken;
