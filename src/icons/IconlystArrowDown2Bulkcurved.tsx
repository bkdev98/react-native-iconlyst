import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown2Bulkcurved = ({
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
      d="M12.25 16.5c3.266 0 7.121-6.24 7.86-7.49a.995.995 0 0 0-.351-1.37 1 1 0 0 0-1.369.351c-1.553 2.625-4.578 6.51-6.14 6.51z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.25 14.5c-1.56 0-4.585-3.884-6.14-6.509A.998.998 0 1 0 4.39 9.01c.74 1.251 4.594 7.491 7.86 7.491z"
    />
  </Svg>
);
export default IconlystArrowDown2Bulkcurved;
