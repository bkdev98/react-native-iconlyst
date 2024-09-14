import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOptimizeBroken = ({
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
      d="M14.67 12.67v-.04a2.07 2.07 0 0 0-2.071-2.071H5.82a2.071 2.071 0 1 0 0 4.142h4.706v4.707a2.071 2.071 0 1 0 4.142 0v-3.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.82 14.7a2.071 2.071 0 0 0 0-4.141M21.2 12.327a2.071 2.071 0 0 1-4.141 0V7.62h-4.707a2.071 2.071 0 0 1 0-4.141h6.778a2.07 2.07 0 0 1 2.07 2.11v3.37"
    />
  </Svg>
);
export default IconlystGoogleOptimizeBroken;
