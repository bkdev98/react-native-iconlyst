import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialSquareTwoTone = ({
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
      d="M8.283 3.063h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.945-1.834 5.026-4.783 5.026H8.283c-2.948 0-4.783-2.08-4.783-5.026V8.09c0-2.945 1.844-5.026 4.783-5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.088 15.684h-1.307M17.69 11.174v2.279a2.425 2.425 0 0 1-1.596 2.23M15.679 11.276v1.031c0 .74-.6 1.34-1.34 1.34h-.217c-.74 0-1.34-.6-1.34-1.34V8.441M7.313 12.764v.932a1.689 1.689 0 1 0 3.377 0V8.441"
    />
  </Svg>
);
export default IconlystRialSquareTwoTone;
