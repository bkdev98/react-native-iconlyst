import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleHorizontalLight = ({
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
      d="m17.447 14.959 2.521 2.52L17.448 20M17.447 4l2.521 2.521-2.52 2.52M4.031 6.523c1.93 0 3.666 0 5.18 1.497"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.967 15.887c1.824 1.594 4.02 1.594 6.004 1.594M19.969 6.52c-2.99 0-6.475 0-8.468 5.478-1.993 5.48-4.483 5.48-7.472 5.48"
    />
  </Svg>
);
export default IconlystShuffleHorizontalLight;
