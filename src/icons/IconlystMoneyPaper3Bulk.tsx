import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper3Bulk = ({
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
      d="M17.812 4.45H6.188C3.982 4.45 2.5 5.995 2.5 8.3v7.4c0 2.302 1.482 3.85 3.688 3.85h11.623c2.207 0 3.689-1.548 3.689-3.85V8.3c0-2.304-1.482-3.85-3.688-3.85"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.571 8.71c0 .413.336.744.75.744s.75-.34.75-.755a.75.75 0 0 0-1.5 0zM8.963 12a3.04 3.04 0 0 0 3.038 3.04A3.04 3.04 0 0 0 15.04 12a3.04 3.04 0 0 0-3.038-3.04A3.04 3.04 0 0 0 8.963 12M5.93 15.3c0 .413.336.744.75.744s.75-.34.75-.755a.75.75 0 0 0-1.5 0zm4.534-3.3c0-.85.69-1.54 1.539-1.54a1.54 1.54 0 0 1 0 3.08A1.54 1.54 0 0 1 10.463 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper3Bulk;
