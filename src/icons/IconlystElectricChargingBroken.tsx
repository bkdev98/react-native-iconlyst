import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystElectricChargingBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.69 21.137v-3.988c0-.242.197-.439.44-.439h1.38a2.213 2.213 0 0 1 .799 4.278M10.69 20.078H9.28m1.41-2.309H9.28M17.702 5.666A8.063 8.063 0 1 0 6.3 17.07"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.99 13.156 1.94-2.999h-3.858l1.939-3M14.767 18.943a8 8 0 0 0 2.935-1.874 8.06 8.06 0 0 0 2.119-7.67"
    />
  </Svg>
);
export default IconlystElectricChargingBroken;
