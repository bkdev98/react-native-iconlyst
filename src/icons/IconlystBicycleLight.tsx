import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBicycleLight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.25 16.344a3.668 3.668 0 1 0 7.337 0 3.668 3.668 0 0 0-7.337 0M13.913 16.344a3.668 3.668 0 1 0 7.337 0 3.668 3.668 0 0 0-7.337 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.939 10.868H8.82c0 2.021-.292 3.508-2.134 5.328M17.582 16.196l-2.836-9.454 2.314-.984M8.569 8.279H5.82M8.824 10.869l-1.89-2.59"
    />
  </Svg>
);
export default IconlystBicycleLight;
