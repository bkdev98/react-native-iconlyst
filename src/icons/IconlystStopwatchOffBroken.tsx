import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchOffBroken = ({
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
      d="M6.866 8.145a7.6 7.6 0 0 0-1.998 5.151A7.63 7.63 0 0 0 12.5 20.93a7.6 7.6 0 0 0 2.387-.381M10.209 3h4.244M10.178 6.027a7.634 7.634 0 0 1 9.593 9.593M17.266 7.349l1.471-1.472M19.718 21 5.16 6.44"
    />
  </Svg>
);
export default IconlystStopwatchOffBroken;
