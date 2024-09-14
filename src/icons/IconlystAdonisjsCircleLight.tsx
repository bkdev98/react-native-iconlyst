import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdonisjsCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.484 7.233c-.616.131-1.135.585-1.389 1.156q-.963 2.187-1.925 4.374c-.164.383-.367.759-.412 1.18-.055.569.118 1.168.506 1.594.378.417.944.634 1.502.634.773.025 1.459-.452 2.233-.43.64-.02 1.216.304 1.836.405.796.133 1.697-.178 2.117-.895.35-.572.398-1.31.128-1.924L13.948 8.48c-.154-.362-.392-.696-.715-.925-.498-.36-1.157-.453-1.749-.32"
    />
  </Svg>
);
export default IconlystAdonisjsCircleLight;
