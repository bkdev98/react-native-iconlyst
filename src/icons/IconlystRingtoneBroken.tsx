import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneBroken = ({
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
      d="M10.433 19.975A2.69 2.69 0 0 0 12.529 21a2.69 2.69 0 0 0 2.106-1.025M6.734 8.35c0 3.204-1.57 3.038-1.57 5.647.218 2.614 2.47 3.265 7.335 3.265s7.116-.643 7.335-3.265c0-2.611-1.57-2.444-1.57-5.648C18.264 5.847 15.989 3 12.499 3c-2.026 0-3.642.96-4.642 2.254"
    />
  </Svg>
);
export default IconlystRingtoneBroken;
