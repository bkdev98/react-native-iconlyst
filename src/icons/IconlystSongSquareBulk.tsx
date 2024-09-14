import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSquareBulk = ({
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
      d="M16.787 2.5H8.352C5.193 2.5 3.07 4.721 3.07 8.027v7.947c0 3.305 2.123 5.526 5.282 5.526h8.434c3.161 0 5.284-2.221 5.284-5.526V8.027c0-3.306-2.123-5.527-5.283-5.527"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.743 10.07a.75.75 0 0 1-.948.476 3.4 3.4 0 0 1-1.105-.616l-.533 4.427q-.002.005-.003.01a2.916 2.916 0 0 1-3.235 2.531 2.89 2.89 0 0 1-1.941-1.092 2.9 2.9 0 0 1-.6-2.144 2.9 2.9 0 0 1 1.093-1.94 2.9 2.9 0 0 1 2.144-.6c.5.06.959.255 1.355.544l.473-3.924a.75.75 0 0 1 .697-.658.77.77 0 0 1 .775.565c.011.041.314 1.128 1.352 1.473a.75.75 0 0 1 .476.948m-5.48 2.53q.085 0 .172.01c.374.045.708.233.94.53.233.296.337.664.29 1.038a1.42 1.42 0 0 1-1.567 1.231 1.41 1.41 0 0 1 .165-2.809"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongSquareBulk;
