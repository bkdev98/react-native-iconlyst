import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserScanTwoTone = ({
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
      d="M21.65 15.531v1.577A3.89 3.89 0 0 1 17.757 21h-1.29M3.65 15.531v1.577A3.89 3.89 0 0 0 7.543 21H8.8M21.65 8.47V6.893A3.89 3.89 0 0 0 17.757 3H16.5M3.65 8.47V6.893A3.89 3.89 0 0 1 7.543 3h1.29"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.888 9.596a2.236 2.236 0 1 1-4.473 0 2.236 2.236 0 0 1 4.473 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.15 16.644c0-.952.902-2.14 3.502-2.14s3.5 1.18 3.5 2.133"
    />
  </Svg>
);
export default IconlystUserScanTwoTone;
