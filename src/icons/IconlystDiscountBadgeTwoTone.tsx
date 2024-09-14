import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBadgeTwoTone = ({
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
      d="M3.987 7.35c.296-2.118 1.702-3.616 3.839-3.866M3.987 16.664c.296 2.118 1.702 3.607 3.839 3.857M17.14 3.484c2.137.25 3.534 1.748 3.83 3.867M17.14 20.521c2.137-.25 3.534-1.739 3.83-3.857M14.378 20.537H10.62M14.378 3.462H10.62M3.962 13.88v-3.759M21.038 13.88v-3.759"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.224 14.331 4.655-4.655M14.765 14.255v.045m.185-.036a.186.186 0 1 1-.373 0 .186.186 0 0 1 .373 0M10.236 9.723v.046m.186-.036a.186.186 0 1 1-.373 0 .186.186 0 0 1 .373 0"
    />
  </Svg>
);
export default IconlystDiscountBadgeTwoTone;
