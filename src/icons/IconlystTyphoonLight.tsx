import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTyphoonLight = ({
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
    <Circle
      cx={12.062}
      cy={12.096}
      r={5.306}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={12.063}
      cy={12.096}
      r={1.725}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.011 15.536C4.442 11.122 4.95 6.257 7.195 3M16.003 8.528c3.546 4.386 3.069 9.216.86 12.472M8.518 8.132c4.464-3.61 9.39-3.05 12.646-.74M15.525 16.121c-4.38 3.542-9.205 3.07-12.462.867"
    />
  </Svg>
);
export default IconlystTyphoonLight;
