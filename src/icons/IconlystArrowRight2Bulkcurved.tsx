import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight2Bulkcurved = ({
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
      d="M16.75 12c0-3.266-6.24-7.121-7.49-7.86a.996.996 0 0 0-1.37.351 1 1 0 0 0 .351 1.369c2.625 1.553 6.51 4.578 6.51 6.14z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.75 12c0 1.56-3.884 4.585-6.509 6.14a.998.998 0 1 0 1.018 1.72c1.251-.739 7.491-4.594 7.491-7.86z"
    />
  </Svg>
);
export default IconlystArrowRight2Bulkcurved;
