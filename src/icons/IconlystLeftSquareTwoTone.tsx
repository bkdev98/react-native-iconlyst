import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareTwoTone = ({
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
      d="M16.718 3.25H8.283C5.335 3.25 3.5 5.331 3.5 8.276v7.948c0 2.945 1.835 5.026 4.784 5.026h8.434c2.948 0 4.782-2.081 4.782-5.026V8.276c0-2.945-1.843-5.026-4.782-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.042 8.86-3.405 3.394 3.405 3.39M8.637 12.254h7.724"
    />
  </Svg>
);
export default IconlystLeftSquareTwoTone;
