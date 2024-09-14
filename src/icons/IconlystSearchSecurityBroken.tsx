import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSecurityBroken = ({
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
      d="M19.761 12.747a8.19 8.19 0 0 1-15.518 2.441M3.455 11.679a8.19 8.19 0 0 1 7.169-8.125M17.213 17.676 20.544 21M20.077 6.081c0 2.093-2.507 2.853-2.507 2.853s-2.509-.759-2.509-2.853c0-2.093-.09-2.027.111-2.229C15.374 3.651 17.241 3 17.57 3c.328 0 2.397.852 2.397.852"
    />
  </Svg>
);
export default IconlystSearchSecurityBroken;
