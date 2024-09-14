import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnsuccessListOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.97 11.755a.75.75 0 0 1 1.061 0l2.6 2.6 2.602-2.6a.75.75 0 0 1 1.06 1.06l-2.6 2.601 2.601 2.602a.75.75 0 0 1-1.06 1.06l-2.602-2.601-2.602 2.601a.75.75 0 1 1-1.06-1.06l2.601-2.602-2.6-2.6a.75.75 0 0 1 0-1.061M3.751 6.984a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m10.602 5.685a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-5.397a.75.75 0 0 1-.75-.75m0 5.876a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-5.397a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnsuccessListOutline;
