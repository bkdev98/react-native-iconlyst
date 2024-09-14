import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeSquareTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.282 3.063h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.026-4.784 5.026H8.282c-2.948 0-4.782-2.08-4.782-5.026V8.09c0-2.945 1.843-5.026 4.782-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.03 8.371h.982a2.29 2.29 0 0 1 .001 4.58h-.983l3.273 3.273M10.03 8.371h5.237M10.03 10.57h5.237"
    />
  </Svg>
);
export default IconlystRupeeSquareTwoTone;
