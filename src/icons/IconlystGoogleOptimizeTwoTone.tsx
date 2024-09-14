import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOptimizeTwoTone = ({
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
      d="M3 12.63c0 1.143.927 2.07 2.071 2.07h4.706v4.707a2.071 2.071 0 1 0 4.142 0V12.63a2.07 2.07 0 0 0-2.07-2.07H5.07A2.07 2.07 0 0 0 3 12.629"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.602 3.477a2.071 2.071 0 0 0 0 4.142h4.707v4.706a2.071 2.071 0 0 0 4.142 0V5.547a2.07 2.07 0 0 0-2.071-2.07z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.07 14.7a2.07 2.07 0 1 0 0-4.142 2.07 2.07 0 0 0 0 4.142"
    />
  </Svg>
);
export default IconlystGoogleOptimizeTwoTone;
