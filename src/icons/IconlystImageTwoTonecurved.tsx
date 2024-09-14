import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageTwoTonecurved = ({
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
      d="M6.07 16.855s.813-1.637 1.995-1.637 1.786 1.375 3.096 1.375c1.309 0 2.778-3.448 4.262-3.448 1.482 0 2.548 2.391 2.548 2.391"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.14 9.5a1.558 1.558 0 1 1-3.117.001 1.558 1.558 0 0 1 3.116 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 12.396c0 6.937 2.313 9.25 9.25 9.25s9.25-2.313 9.25-9.25-2.313-9.25-9.25-9.25-9.25 2.313-9.25 9.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageTwoTonecurved;
