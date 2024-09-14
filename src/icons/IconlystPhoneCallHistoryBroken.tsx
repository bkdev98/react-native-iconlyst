import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHistoryBroken = ({
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
      d="M8.795 15.677c8.083 8.081 10.383 4.58 10.746 4.29 2.889-2.89 1.578-3.347-.703-5.627-2.366-2.364-3.471 2.196-7.187-1.52-3.715-3.714.841-4.821-1.524-7.187-2.281-2.28-2.73-3.598-5.627-.702-.263.328-3.155 2.247 2.3 8.605M21.5 6.663a3.632 3.632 0 1 1-.924-2.42"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.996 7.608-1.148-.687V5.445"
    />
  </Svg>
);
export default IconlystPhoneCallHistoryBroken;
