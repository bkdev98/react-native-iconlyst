import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownRightLayoutBulk = ({
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
      d="M16.216 2.5H7.783C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.283 5.53h8.434c3.16 0 5.283-2.222 5.283-5.53V8.031c0-3.308-2.124-5.531-5.284-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.108 13.48H9.81a.75.75 0 0 1 0-1.5h7.298a.75.75 0 0 1 0 1.5m0 4.38H13.74a.75.75 0 0 1 0-1.5h3.368a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownRightLayoutBulk;
