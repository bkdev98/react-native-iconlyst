import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeenCheckmarkBroken = ({
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
      d="m8.792 12.097 3.571 3.57c.183.184.48.184.662 0l1.87-1.868M16.763 11.931 20.5 8.194M15.818 8.194l-3.123 3.122M4.5 12.487l3.181 3.181c.183.184.48.184.662 0l2.01-2.01"
    />
  </Svg>
);
export default IconlystSeenCheckmarkBroken;
