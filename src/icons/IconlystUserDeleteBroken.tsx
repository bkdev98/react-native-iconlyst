import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserDeleteBroken = ({
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
      d="M5.446 19.478c-.111-.638-.066-1.3-.066-1.945 0-2.429 1.97-4.398 4.4-4.398h4.283c1.182 0 2.255.466 3.046 1.225M19.393 16.978l-3.534 3.533m3.57.037-3.605-3.605"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.16 8.185a4.7 4.7 0 1 0 .902-2.77"
    />
  </Svg>
);
export default IconlystUserDeleteBroken;
