import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowerBold = ({
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
      d="M15.402 6.426v-.928c0-.944-.41-1.839-1.124-2.458a3.23 3.23 0 0 0-2.584-.754l-4.486.64a3.254 3.254 0 0 0-2.795 3.212v10.78a.75.75 0 0 0 1.5 0V6.139a1.75 1.75 0 0 1 1.503-1.727l4.492-.64c.5-.075 1.006.073 1.39.404.384.333.604.815.604 1.323v.9c-.993.148-1.912.6-2.656 1.308a4.9 4.9 0 0 0-1.529 3.572v.131c0 .74.6 1.34 1.337 1.34h7.196c.737 0 1.337-.6 1.337-1.34 0-2.525-1.804-4.606-4.185-4.983M11.873 19.259a.75.75 0 0 0-.75.75v.99a.75.75 0 0 0 1.5 0v-.99a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.873 14.479a.75.75 0 0 0-.75.75v2.16a.75.75 0 0 0 1.5 0v-2.16a.75.75 0 0 0-.75-.75M14.652 17.58a.75.75 0 0 0-.75.75v1.318a.75.75 0 0 0 1.5 0V18.33a.75.75 0 0 0-.75-.75M17.43 14.479a.75.75 0 0 0-.75.75v2.16a.75.75 0 0 0 1.5 0v-2.16a.75.75 0 0 0-.75-.75M14.652 14.479a.75.75 0 0 0-.75.75v.48a.75.75 0 1 0 1.5 0v-.48a.75.75 0 0 0-.75-.75M17.43 19.259a.75.75 0 0 0-.75.75v.99a.75.75 0 0 0 1.5 0v-.99a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShowerBold;
