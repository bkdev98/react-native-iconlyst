import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSquareTwoTone = ({
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
      d="M8.325 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.325c-2.949 0-4.782-2.081-4.782-5.026V8.026C3.543 5.081 5.386 3 8.325 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.56 15.497a1.433 1.433 0 0 1 1.968 0M9.7 12.932a4.15 4.15 0 0 1 2.84-1.125c1.096 0 2.109.43 2.85 1.125M7.805 10.374a6.9 6.9 0 0 1 4.735-1.872c1.827 0 3.5.71 4.742 1.872"
    />
  </Svg>
);
export default IconlystWirelessSquareTwoTone;
