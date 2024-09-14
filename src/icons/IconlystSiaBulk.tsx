import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSiaBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.722 3 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.841 15.59a.75.75 0 0 1-.75.75h-3.59A4.345 4.345 0 0 1 8.16 12a4.345 4.345 0 0 1 4.34-4.34A4.345 4.345 0 0 1 16.84 12zM9.661 12a2.843 2.843 0 0 1 2.84-2.84A2.844 2.844 0 0 1 15.34 12v2.84h-2.84A2.843 2.843 0 0 1 9.66 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSiaBulk;
