import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSBroken = ({
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
      d="M21.75 12.76v3.114c0 2.794-1.74 4.77-4.539 4.77H8.287c-2.797 0-4.537-1.976-4.537-4.77V8.123c0-2.794 1.748-4.769 4.537-4.769h8.925c2.797 0 4.538 1.975 4.538 4.769v1.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.406 3.36c-.428 2.082-1.382 7.51-1.323 8.755.039.633.175.827.797.905.497.068.993.117 1.49.117.447 0 .427.241.408.67-.02.515-.02 1.556.097 2.967.088 1.1.253 2.413.545 3.872"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.967 15.332a6.9 6.9 0 0 0 4.631 1.772c1.93 0 3.675-.79 4.939-2.061M8.32 8.28v1.127m8.862-1.128v1.128"
    />
  </Svg>
);
export default IconlystMacOSBroken;
