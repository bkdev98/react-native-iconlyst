import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxDownLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.218 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.835 3 7.783 3h8.435C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.156 21 16.218 21M7.463 16.717h9.077M9.032 13.472V7.283"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.367 11.802 1.666 1.67 1.664-1.67M14.97 13.472V7.283M13.305 11.802l1.665 1.67 1.664-1.67"
    />
  </Svg>
);
export default IconlystDeliveryBoxDownLight;
