import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystParkingParkingsignTwoTone = ({
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
    <Circle
      cx={12.249}
      cy={12.502}
      r={5.851}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.825 6.199a8.996 8.996 0 0 0 0 12.602M18.675 6.199a8.996 8.996 0 0 1 0 12.602M11.297 14.865v-4.726H12.7c.746 0 1.35.604 1.35 1.35v0a1.35 1.35 0 0 1-1.35 1.35h-1.403"
    />
  </Svg>
);
export default IconlystParkingParkingsignTwoTone;
