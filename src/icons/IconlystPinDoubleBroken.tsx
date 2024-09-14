import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDoubleBroken = ({
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
      d="M17.656 19.239s-3.594-2.445-3.594-5.002a3.594 3.594 0 0 1 7.188 0c0 1.275-.751 2.523-1.576 3.453"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.746 16.478c-1.736 2.262-3.93 3.812-4.564 3.812-1.111 0-6.932-4.709-6.932-9.643 0-3.832 3.1-6.932 6.932-6.932 2.569 0 4.816 1.4 6.013 3.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.178 8.277a2.31 2.31 0 1 1-2.31 2.311M17.624 14.078v.046m.19-.036a.19.19 0 1 1-.381 0 .19.19 0 0 1 .38 0"
    />
  </Svg>
);
export default IconlystPinDoubleBroken;
