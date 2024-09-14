import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSignalTwoTone = ({
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
      d="M11.98 17.984a5.968 5.968 0 1 0-5.968-5.969c0 1.087.345 2.106.852 2.984l-.695 2.839 2.827-.707c.878.508 1.897.852 2.984.852"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.286 20.643 1.234-.123a3.6 3.6 0 0 0 1.087.405M3.152 19.723l-.125 1.246 1.296-.13M3.067 15.367c.077.384.204.755.41 1.11l-.114 1.143M3.094 10.89a9 9 0 0 0-.066 1.095c0 .313-.012.621-.025.926M4.931 6.453a9 9 0 0 0-1.2 2.041M8.552 3.691a9 9 0 0 0-1.886 1.073M13.151 3.072a9 9 0 0 0-2.455.024M17.5 4.868a9 9 0 0 0-2.116-1.216M20.335 8.591a9 9 0 0 0-1.281-2.189M20.91 13.251a9 9 0 0 0 0-2.532M19.162 17.43a9 9 0 0 0 1.192-2.098M15.439 20.296a9 9 0 0 0 2.117-1.237M10.978 21c.339-.016.684-.03 1.034-.03q.624-.001 1.226-.083"
    />
  </Svg>
);
export default IconlystSignalTwoTone;
