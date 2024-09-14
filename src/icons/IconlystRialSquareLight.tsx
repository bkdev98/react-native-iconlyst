import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialSquareLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.783 3.063h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.945-1.834 5.026-4.783 5.026H7.783C4.835 21.063 3 18.983 3 16.037V8.09c0-2.945 1.844-5.026 4.783-5.026M13.588 15.684h-1.307"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.19 11.174v2.279a2.425 2.425 0 0 1-1.596 2.23M15.179 11.276v1.031c0 .74-.6 1.34-1.34 1.34h-.217c-.74 0-1.34-.6-1.34-1.34V8.441M6.813 12.764v.932a1.689 1.689 0 1 0 3.377 0V8.441"
    />
  </Svg>
);
export default IconlystRialSquareLight;
