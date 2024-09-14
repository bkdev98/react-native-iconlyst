import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSFinderLight = ({
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
      d="M7.537 3.355h8.925C19.26 3.355 21 5.33 21 8.124v7.75c0 2.795-1.74 4.77-4.539 4.77H7.537C4.74 20.644 3 18.67 3 15.874v-7.75C3 5.33 4.748 3.355 7.537 3.355"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.656 3.36c-.428 2.082-1.382 7.51-1.323 8.755.039.633.175.827.797.905.497.068.993.117 1.49.117.447 0 .427.241.408.67-.02.515-.02 1.556.097 2.967.088 1.1.253 2.413.545 3.872"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.217 15.332a6.9 6.9 0 0 0 4.631 1.772c1.93 0 3.675-.79 4.939-2.061M7.57 8.281V9.41m8.862-1.128V9.41"
    />
  </Svg>
);
export default IconlystMacOSFinderLight;
