import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Bulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.72 7.123a4.532 4.532 0 0 1 9.061.02v3.03a.75.75 0 1 1-1.5 0V7.14a3.031 3.031 0 0 0-6.062-.014v3.048a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.896 9.001c1.553-1.215 3.961-1.65 7.354-1.65s5.801.435 7.354 1.65c1.59 1.245 2.165 3.206 2.165 5.909s-.574 4.662-2.165 5.907c-1.553 1.215-3.961 1.65-7.354 1.65s-5.801-.434-7.354-1.65C3.305 19.572 2.73 17.612 2.73 14.91S3.305 10.246 4.896 9"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBag2Bulkcurved;
