import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrapeLight = ({
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
      d="M14.187 8.992A2.57 2.57 0 0 0 12 7.792a2.57 2.57 0 0 0-2.178 1.19c-.262.407-.416.89-.416 1.404 0 .512.154.996.416 1.403a2 2 0 0 0 .165.242c.445.532 1.093.89 1.829.938.114.02.25.02.367 0a2.6 2.6 0 0 0 1.829-.938q.087-.115.174-.242a2.67 2.67 0 0 0 .407-1.403c0-.513-.145-.987-.407-1.394m0 0v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.823 11.789a2.594 2.594 0 0 1-2.004 1.18c-.057.01-.125.01-.183.01a2.593 2.593 0 0 1 0-5.186c.92 0 1.733.474 2.187 1.19M14.188 11.789c.048.087.106.164.174.242.436.532 1.084.89 1.82.938.057.01.115.01.183.01a2.593 2.593 0 0 0 0-5.186 2.57 2.57 0 0 0-2.177 1.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.18 12.969c.378.446.601 1.016.601 1.646a2.594 2.594 0 0 1-2.593 2.592h-.01A2.57 2.57 0 0 1 12 16.017c-.284-.396-.416-.922-.416-1.402 0-.593.208-1.198.6-1.646"
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
      d="M9.572 17.198c-.184.358-.29.774-.29 1.21A2.6 2.6 0 0 0 11.883 21a2.593 2.593 0 0 0 2.593-2.593c0-.435-.106-.841-.29-1.2M12.002 7.79s.132-3.116 3.188-3.67"
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
export default IconlystGrapeLight;
