import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxDownTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.718 21H8.283C5.335 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.335 3 8.283 3h8.435C19.666 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.844 5.026-4.782 5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.963 16.717h9.077M9.532 13.472V7.283M7.867 11.802l1.666 1.67 1.664-1.67M15.47 13.472V7.283M13.805 11.802l1.665 1.67 1.664-1.67"
    />
  </Svg>
);
export default IconlystDeliveryBoxDownTwoTone;
