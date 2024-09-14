import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar2Broken = ({
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
      d="M11.999 3H7.782C4.834 3 3 5.081 3 8.026v7.948C3 18.919 4.843 21 7.782 21h8.435C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.216 3h-1.054M11.993 8.984v3.327M11.994 12.313l2.138 2.703M9.867 15.002l2.127-2.69M8.941 11.23l3.05 1.081M11.99 12.313l3.067-1.086"
    />
  </Svg>
);
export default IconlystStar2Broken;
