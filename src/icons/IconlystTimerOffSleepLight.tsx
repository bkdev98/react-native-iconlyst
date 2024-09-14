import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerOffSleepLight = ({
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
      d="M12.153 20.395a7.482 7.482 0 1 0 0-14.963 7.48 7.48 0 0 0-7.481 7.482 7.48 7.48 0 0 0 7.481 7.481M6.402 3.615a10.85 10.85 0 0 0-3.244 3.087M21.158 6.702a10.8 10.8 0 0 0-3.254-3.097"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.425 10.975h3.496l-3.534 3.878h3.534"
    />
  </Svg>
);
export default IconlystTimerOffSleepLight;
