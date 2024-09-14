import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInstagramBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.829 7.38a1.034 1.034 0 0 0 2.069 0 1.033 1.033 0 0 0-2.069 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.844 16.58a4.256 4.256 0 0 1-4.252-4.25 4.256 4.256 0 0 1 4.252-4.25 4.255 4.255 0 0 1 4.252 4.25 4.255 4.255 0 0 1-4.252 4.25m-2.752-4.25a2.753 2.753 0 0 1 5.505 0 2.753 2.753 0 0 1-5.505 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInstagramBulk;
