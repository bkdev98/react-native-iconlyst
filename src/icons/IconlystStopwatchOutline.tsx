import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchOutline = ({
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
      d="M12.25 6.426a6.912 6.912 0 1 0 .001 13.825 6.912 6.912 0 0 0-.001-13.825m-8.411 6.912a8.411 8.411 0 1 1 16.823 0 8.412 8.412 0 0 1-16.823 0M9.398 3a.75.75 0 0 1 .75-.75h4.208a.75.75 0 0 1 0 1.5h-4.208a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.714 9.839a.75.75 0 0 1 0 1.06l-2.941 2.942a.75.75 0 1 1-1.061-1.06l2.941-2.942a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchOutline;
