import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSatelliteLight = ({
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
      d="m7.746 14.695-2.538 4.96A.924.924 0 0 0 6.032 21h6.133a.925.925 0 0 0 .867-1.247l-1.146-3.086"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.149 4.467c-.39-.39-1.03-.393-1.366.045a7.529 7.529 0 0 0 10.554 10.554c.439-.336.435-.975.045-1.365zM13.78 5.672c1.239.305 2.12 1.219 2.378 2.38M14.89 2.989a5.36 5.36 0 0 1 4.005 3.943"
    />
  </Svg>
);
export default IconlystSatelliteLight;
