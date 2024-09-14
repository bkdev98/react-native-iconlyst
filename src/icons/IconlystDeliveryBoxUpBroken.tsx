import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxUpBroken = ({
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
      d="M11.544 8.955 9.88 7.283 8.215 8.955M17.484 8.955l-1.666-1.672-1.664 1.672M9.879 7.284v6.19M15.82 7.284v6.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.85 11.566v-3.54C3.85 5.081 5.685 3 8.633 3h8.434c2.949 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.844 5.026-4.783 5.026H8.633c-2.948 0-4.783-2.081-4.783-5.026v-.987M13.439 16.717h4.1M8.463 16.717h2.27"
    />
  </Svg>
);
export default IconlystDeliveryBoxUpBroken;
