import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.245 14.782 2.993-3.89 3.414 2.681 2.929-3.78"
    />
    <Circle
      cx={19.995}
      cy={4.2}
      r={1.922}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.924 3.12H7.657c-3.012 0-4.88 2.133-4.88 5.144v8.083c0 3.011 1.832 5.135 4.88 5.135H8.5M21.14 9.308v7.039c0 3.011-1.868 5.135-4.88 5.135h-4.302"
    />
  </Svg>
);
export default IconlystActivityBroken;
