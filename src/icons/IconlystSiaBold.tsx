import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSiaBold = ({
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
      d="M16.341 15.59a.75.75 0 0 1-.75.75H12A4.345 4.345 0 0 1 7.66 12 4.345 4.345 0 0 1 12 7.66 4.345 4.345 0 0 1 16.341 12zM16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.16A2.843 2.843 0 0 0 9.16 12 2.843 2.843 0 0 0 12 14.84h2.841V12a2.844 2.844 0 0 0-2.84-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSiaBold;
