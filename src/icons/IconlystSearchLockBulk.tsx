import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLockBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.133 2.82a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.993 20.119-1.984-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M13.51 9.37a2.378 2.378 0 0 0-4.754-.009v.57a2.1 2.1 0 0 0-1.123 1.856v1.576c0 1.157.939 2.095 2.096 2.095h2.809a2.096 2.096 0 0 0 2.095-2.095v-1.576c0-.806-.455-1.506-1.122-1.857v-.56m-1.402.321v-.306a.976.976 0 0 0-1.95-.005v.311zm-3.072 2.095c0-.382.31-.692.693-.692h2.809c.382 0 .693.31.693.693v1.576c0 .382-.31.693-.693.693h-2.81a.693.693 0 0 1-.692-.693z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLockBulk;
