import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerOffSleepBroken = ({
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
      d="M6.902 3.615a10.85 10.85 0 0 0-3.244 3.087M21.658 6.702a10.8 10.8 0 0 0-3.254-3.097M10.925 10.975h3.496l-3.534 3.878h3.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.172 12.89a7.48 7.48 0 0 1 7.481-7.482 7.482 7.482 0 1 1-6.626 10.96"
    />
  </Svg>
);
export default IconlystTimerOffSleepBroken;
