import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSecurityScanBroken = ({
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
      d="M3.249 15.856v1.577a3.893 3.893 0 0 0 3.893 3.892h1.257M21.25 15.856v1.577a3.893 3.893 0 0 1-3.894 3.892h-1.289M3.249 8.793V7.216a3.89 3.89 0 0 1 3.893-3.892h1.289M21.25 8.793V7.216a3.89 3.89 0 0 0-3.892-3.892H16.1M18.123 11.922H6.38M7.964 11.924v-1.772a2.11 2.11 0 0 1 2.107-2.117h1.47M16.537 11.924v-1.772c0-1.168-.95-2.117-2.106-2.117M16.537 14.5c0 1.167-.95 2.106-2.106 2.106h-4.36A2.1 2.1 0 0 1 7.964 14.5"
    />
  </Svg>
);
export default IconlystSecurityScanBroken;
