import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchSpeedBroken = ({
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
      d="M20.798 13.335a7.66 7.66 0 1 0-15.32 0M9.17 21.001l3.968-.002a7.66 7.66 0 0 0 6.856-4.243M6.686 18.467h4.291M4.203 15.934h4.292M11.035 3h4.207M13.127 13.308l2.94-2.94"
    />
  </Svg>
);
export default IconlystStopwatchSpeedBroken;
