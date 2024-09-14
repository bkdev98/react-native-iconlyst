import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarForwardOutline = ({
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
      d="M7.586 9.604a.75.75 0 0 1 .75-.75h8.497a.75.75 0 0 1 0 1.5H8.336a.75.75 0 0 1-.75-.75M8.944 2.25a.75.75 0 0 1 .75.75v2.576a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M16.217 2.25a.75.75 0 0 1 .75.75v2.576a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.148 6.04c-.559.531-.917 1.36-.914 2.558v8.216c0 1.199.36 2.03.92 2.566.567.54 1.434.87 2.624.87h7.613c1.182 0 2.048-.334 2.616-.885.564-.546.927-1.397.927-2.62V8.6c0-1.198-.36-2.027-.922-2.56-.567-.54-1.434-.868-2.621-.868H8.77c-1.192 0-2.059.33-2.623.867M5.113 4.952C6.03 4.08 7.31 3.672 8.77 3.672h7.62c1.457 0 2.737.407 3.656 1.28.925.88 1.389 2.14 1.389 3.648v8.146c0 1.526-.462 2.803-1.384 3.696-.918.89-2.199 1.308-3.66 1.308H8.778c-1.461 0-2.74-.409-3.659-1.285-.923-.882-1.385-2.144-1.385-3.651V8.6c-.004-1.507.455-2.768 1.379-3.648"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.419 15.26a.75.75 0 0 1 .75-.75h6.8a.75.75 0 0 1 0 1.5h-6.8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.388 12.825a.75.75 0 0 1 1.06-.038l2.065 1.925a.75.75 0 0 1 0 1.097l-2.065 1.925a.75.75 0 0 1-1.023-1.098l1.476-1.375-1.476-1.376a.75.75 0 0 1-.037-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarForwardOutline;
