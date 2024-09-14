import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft2Bulkcurved = ({
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
      d="M7.75 12c0-3.266 6.24-7.121 7.49-7.86a.995.995 0 0 1 1.37.351 1 1 0 0 1-.352 1.369C13.633 7.413 9.75 10.438 9.75 12z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.75 12c0 1.56 3.884 4.585 6.51 6.14a.998.998 0 1 1-1.018 1.72C13.99 19.121 7.75 15.266 7.75 12z"
    />
  </Svg>
);
export default IconlystArrowLeft2Bulkcurved;
