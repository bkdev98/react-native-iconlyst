import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchPauseOutline = ({
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
      d="M12.25 6.426a6.913 6.913 0 0 0 0 13.824.75.75 0 0 1 0 1.5 8.413 8.413 0 1 1 8.412-8.412.75.75 0 0 1-1.5 0 6.913 6.913 0 0 0-6.912-6.912"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.156 16.01a.75.75 0 0 1 .75.75v3.68a.75.75 0 1 1-1.5 0v-3.68a.75.75 0 0 1 .75-.75M18.996 16.01a.75.75 0 0 1 .75.75v3.68a.75.75 0 1 1-1.5 0v-3.68a.75.75 0 0 1 .75-.75M15.712 9.839a.75.75 0 0 1 0 1.06l-2.941 2.942a.75.75 0 0 1-1.061-1.06l2.941-2.942a.75.75 0 0 1 1.06 0M9.396 3a.75.75 0 0 1 .75-.75h4.208a.75.75 0 1 1 0 1.5h-4.207a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchPauseOutline;
