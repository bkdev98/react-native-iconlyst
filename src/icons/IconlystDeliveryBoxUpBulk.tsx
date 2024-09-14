import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxUpBulk = ({
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
      d="M17.068 2.5H8.633c-3.16 0-5.283 2.222-5.283 5.529v7.94c0 3.308 2.123 5.531 5.283 5.531h8.435c3.159 0 5.282-2.223 5.282-5.531v-7.94c0-3.307-2.123-5.529-5.282-5.529"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.953 9.48a.75.75 0 0 0 1.063-1.06L16.35 6.75a.773.773 0 0 0-1.063 0l-1.664 1.67a.749.749 0 1 0 1.063 1.06l.385-.387v4.377a.75.75 0 0 0 1.5 0V9.096zM8.313 17.47h9.076a.75.75 0 0 0 0-1.5H8.313a.75.75 0 0 0 0 1.5M9.348 6.75 7.684 8.42a.749.749 0 1 0 1.062 1.06l.383-.385v4.375a.75.75 0 0 0 1.5 0V9.095l.384.385a.751.751 0 0 0 1.063-1.06L10.41 6.75a.77.77 0 0 0-1.062 0"
    />
  </Svg>
);
export default IconlystDeliveryBoxUpBulk;
