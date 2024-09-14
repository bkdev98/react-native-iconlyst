import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchSpeedOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.478 13.336a8.41 8.41 0 1 1 16.82 0c0 4.644-3.765 8.412-8.41 8.413l-3.968.002a.75.75 0 0 1 0-1.5l3.968-.002a6.912 6.912 0 0 0 0-13.823 6.91 6.91 0 0 0-6.91 6.91.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.686 18.467a.75.75 0 0 1 .75-.75h4.291a.75.75 0 0 1 0 1.5H6.436a.75.75 0 0 1-.75-.75M3.203 15.934a.75.75 0 0 1 .75-.75h4.292a.75.75 0 0 1 0 1.5H3.953a.75.75 0 0 1-.75-.75M10.035 3a.75.75 0 0 1 .75-.75h4.207a.75.75 0 0 1 0 1.5h-4.207a.75.75 0 0 1-.75-.75M16.348 9.837a.75.75 0 0 1 0 1.06l-2.94 2.941a.75.75 0 0 1-1.061-1.06l2.94-2.941a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchSpeedOutline;
