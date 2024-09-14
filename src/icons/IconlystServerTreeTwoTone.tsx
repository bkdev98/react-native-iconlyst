import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTreeTwoTone = ({
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
      d="M3.5 18.674a1.982 1.982 0 1 0 3.964 0 1.982 1.982 0 0 0-3.964 0M17.535 18.674a1.982 1.982 0 1 0 3.964 0 1.982 1.982 0 0 0-3.964 0M10.518 18.675a1.982 1.982 0 1 0 3.963 0 1.982 1.982 0 0 0-3.963 0M17.264 8.39H8.005a2.523 2.523 0 0 1 0-5.046h9.26a2.523 2.523 0 0 1 0 5.046"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.482 16.692v-2.005c0-1.107.898-2.005 2.006-2.005h10.025c1.108 0 2.006.898 2.006 2.005v2.005M12.5 8.39v8.303"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystServerTreeTwoTone;
