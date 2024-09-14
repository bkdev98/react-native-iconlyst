import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.438 14.383a.947.947 0 0 0 1.892 0 .947.947 0 0 0-1.892 0M9.077 14.98a.746.746 0 0 0 1.06 0l4.898-4.896a.75.75 0 1 0-1.06-1.06L9.077 13.92a.75.75 0 0 0 0 1.06M10.567 9.619a.947.947 0 0 0-1.893 0 .947.947 0 0 0 1.893 0"
    />
  </Svg>
);
export default IconlystDiscountBulk;
