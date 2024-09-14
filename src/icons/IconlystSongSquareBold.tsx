import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSquareBold = ({
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
      d="M10.865 12.61a1.394 1.394 0 0 0-1.038.291 1.41 1.41 0 0 0 .701 2.508 1.42 1.42 0 0 0 1.568-1.23 1.4 1.4 0 0 0-.29-1.04 1.4 1.4 0 0 0-.941-.529"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.173 10.07a.75.75 0 0 1-.948.476 3.4 3.4 0 0 1-1.105-.616l-.533 4.427-.003.009a2.916 2.916 0 0 1-3.235 2.532 2.89 2.89 0 0 1-1.941-1.092 2.9 2.9 0 0 1-.6-2.144 2.9 2.9 0 0 1 1.093-1.941 2.9 2.9 0 0 1 2.144-.6c.5.06.959.256 1.355.545l.473-3.924a.75.75 0 0 1 .697-.658.77.77 0 0 1 .775.565c.011.041.314 1.128 1.352 1.473a.75.75 0 0 1 .476.948m.044-7.57H7.782C4.623 2.5 2.5 4.721 2.5 8.027v7.947c0 3.305 2.123 5.526 5.282 5.526h8.434c3.161 0 5.284-2.221 5.284-5.526V8.027c0-3.306-2.123-5.527-5.283-5.527"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongSquareBold;
