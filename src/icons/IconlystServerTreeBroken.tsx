import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTreeBroken = ({
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
      d="M4.982 20.655A1.982 1.982 0 1 0 3 18.673M19.017 20.655A1.982 1.982 0 1 1 21 18.673"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.018 18.675a1.982 1.982 0 1 0 3.963 0 1.982 1.982 0 0 0-3.963 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.135 3.344h-4.63a2.523 2.523 0 0 0 0 5.046h9.26a2.523 2.523 0 0 0 0-5.046H15.22M4.982 16.692v-2.005c0-1.107.898-2.005 2.006-2.005h10.025c1.108 0 2.006.898 2.006 2.005v2.005M12 8.39v8.303"
    />
  </Svg>
);
export default IconlystServerTreeBroken;
