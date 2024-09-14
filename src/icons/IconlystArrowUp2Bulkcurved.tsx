import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp2Bulkcurved = ({
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
      d="M12.25 7.5c3.266 0 7.121 6.24 7.86 7.49a.995.995 0 0 1-.351 1.37 1 1 0 0 1-1.369-.351C16.837 13.384 13.812 9.5 12.25 9.5z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.25 9.5c-1.56 0-4.585 3.884-6.14 6.509a.998.998 0 1 1-1.72-1.018C5.13 13.74 8.984 7.5 12.25 7.5z"
    />
  </Svg>
);
export default IconlystArrowUp2Bulkcurved;
