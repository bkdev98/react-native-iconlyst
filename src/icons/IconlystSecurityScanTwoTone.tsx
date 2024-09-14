import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSecurityScanTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.499 15.815v1.576a3.893 3.893 0 0 0 3.893 3.892h1.257M21.5 15.815v1.576a3.893 3.893 0 0 1-3.894 3.892h-1.289M3.499 8.752V7.175a3.89 3.89 0 0 1 3.893-3.892h1.289M21.5 8.752V7.175a3.89 3.89 0 0 0-3.892-3.892H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.373 11.88H6.63M16.787 11.883v-1.772c0-1.168-.95-2.117-2.106-2.117h-4.36a2.11 2.11 0 0 0-2.107 2.117v1.772M16.787 14.459c0 1.167-.95 2.106-2.106 2.106h-4.36a2.1 2.1 0 0 1-2.107-2.106"
    />
  </Svg>
);
export default IconlystSecurityScanTwoTone;
