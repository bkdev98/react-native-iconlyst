import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMinus1Broken = ({
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
      d="M15.3 11.992H8.702M11.691 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.844 3 7.783 3h8.435C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.166 21 16.217 21h-1.054"
    />
  </Svg>
);
export default IconlystMinus1Broken;
