import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneCheckLight = ({
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
      d="M9.933 19.975A2.69 2.69 0 0 0 12.029 21a2.69 2.69 0 0 0 2.106-1.025M4.664 13.997c.218 2.614 2.47 3.265 7.335 3.265s7.116-.643 7.335-3.265c0-2.611-1.57-2.444-1.57-5.648C17.764 5.847 15.489 3 11.999 3S6.234 5.847 6.234 8.35c0 3.204-1.57 3.038-1.57 5.647"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.863 10.92 1.419 1.42 2.923-2.924"
    />
  </Svg>
);
export default IconlystRingtoneCheckLight;
