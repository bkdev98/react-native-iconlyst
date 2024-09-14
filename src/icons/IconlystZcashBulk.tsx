import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZcashBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.722 3 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.25 15.75h1.836a.75.75 0 0 0 0-1.5h-3.534l4.102-4.76a.75.75 0 0 0-.568-1.24H13.25v-1a.75.75 0 0 0-1.5 0v1H9.916a.75.75 0 0 0 0 1.5h3.534l-4.102 4.76a.75.75 0 0 0 .568 1.24h1.834v.99a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystZcashBulk;
