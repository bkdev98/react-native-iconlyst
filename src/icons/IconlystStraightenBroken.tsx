import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStraightenBroken = ({
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
      d="m18.883 8.855-1.05-3.918a3.36 3.36 0 0 0-4.115-2.376M3.21 8.853a3.36 3.36 0 0 1 2.376-4.115l4.066-1.09M10.06 21.439a3.36 3.36 0 0 1-4.116-2.376l-1.05-3.918M20.568 15.145a3.36 3.36 0 0 1-2.376 4.115l-4.066 1.09M15.7 12.001h-2.097M21 12.001h-2.097M10.397 12.001H8.3M5.097 12.001H3"
    />
  </Svg>
);
export default IconlystStraightenBroken;
