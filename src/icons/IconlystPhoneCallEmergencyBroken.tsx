import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallEmergencyBroken = ({
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
      d="M8.875 15.72c8.065 8.064 10.36 4.57 10.722 4.28 2.883-2.883 1.575-3.338-.702-5.615-2.36-2.358-3.463 2.191-7.17-1.515-3.708-3.707.84-4.812-1.52-7.172-2.277-2.275-2.725-3.59-5.616-.7-.254.317-2.973 2.125 1.818 8.015M18.85 3v5.908M21.408 7.432 16.291 4.48M21.408 4.477 16.291 7.43"
    />
  </Svg>
);
export default IconlystPhoneCallEmergencyBroken;
