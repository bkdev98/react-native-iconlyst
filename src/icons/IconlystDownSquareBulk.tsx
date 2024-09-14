import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 7.782v8.434c0 3.161-2.221 5.284-5.526 5.284H8.026C4.72 21.5 2.5 19.376 2.5 16.215V7.782C2.5 4.623 4.72 2.5 8.026 2.5h7.948c3.305 0 5.526 2.123 5.526 5.282"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.156 10.068a.75.75 0 1 0-1.062 1.06l3.376 3.39a.75.75 0 0 0 1.063 0l3.377-3.39a.75.75 0 1 0-1.063-1.06l-2.845 2.858z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSquareBulk;
