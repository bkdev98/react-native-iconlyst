import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldSearchTwoTone = ({
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
      d="M11.806 20.99a9.01 9.01 0 0 1-8.273-8.986C3.533 7.038 7.562 3 12.537 3c4.601 0 8.385 3.449 8.93 7.899"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.872 11.085a20 20 0 0 0-.197-2.21C15.206 5.445 13.98 3 12.535 3c-1.433 0-2.67 2.445-3.137 5.875a22 22 0 0 0-.216 3.129c0 1.106.075 2.164.216 3.138.328 2.38 1.34 4.676 2.407 5.847M3.533 12.014h8.598"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.759 19.31a3.118 3.118 0 1 1-4.41-4.41 3.118 3.118 0 0 1 4.41 4.41m0 0L21.447 21"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWorldSearchTwoTone;
