import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardDoubleTwoTone = ({
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
      d="M17.79 7.93h.565c1.939 0 3.144 1.365 3.144 3.305v5.236c0 1.93-1.205 3.305-3.144 3.305H10.36c-1.94 0-3.155-1.375-3.155-3.305v-.405"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.644 4.219H6.648c-1.935 0-3.148 1.37-3.148 3.308v5.23c0 1.939 1.207 3.309 3.148 3.309h7.995c1.94 0 3.148-1.37 3.148-3.308V7.527c0-1.938-1.207-3.308-3.147-3.308"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 8.424h14.291"
    />
  </Svg>
);
export default IconlystBankCardDoubleTwoTone;
