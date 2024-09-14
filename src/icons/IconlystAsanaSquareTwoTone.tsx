import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAsanaSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.61 13.07a1.75 1.75 0 1 0 .001 3.5 1.75 1.75 0 0 0-.002-3.5M15.389 13.07a1.75 1.75 0 1 0 .002 3.5 1.75 1.75 0 0 0-.002-3.5M11.999 7.43a1.75 1.75 0 1 0 .002 3.5 1.75 1.75 0 0 0-.002-3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAsanaSquareTwoTone;