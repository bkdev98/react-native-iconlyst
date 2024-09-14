import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointerSquareBulk = ({
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
      d="M16.218 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.026c0-3.305-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.104 11.505-2.496.95 2.427 2.427a.749.749 0 1 1-1.06 1.06l-2.427-2.426-.951 2.496a.75.75 0 0 1-.701.483h-.005a.75.75 0 0 1-.7-.493l-2.73-7.49a.75.75 0 0 1 .941-.968l7.671 2.548a.751.751 0 0 1 .031 1.413"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMousePointerSquareBulk;
