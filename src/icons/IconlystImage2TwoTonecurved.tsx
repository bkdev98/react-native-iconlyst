import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2TwoTonecurved = ({
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
      d="M2.75 12.396c0 6.937 2.313 9.25 9.25 9.25s9.25-2.313 9.25-9.25-2.313-9.25-9.25-9.25-9.25 2.313-9.25 9.25"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.599 9.18a1.76 1.76 0 1 1-3.521.001 1.76 1.76 0 0 1 3.52 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.12 15.063c-.88-.906-2.127-2.737-4.416-2.737s-2.339 4.038-4.675 4.038c-2.337 0-3.278-1.371-4.8-.655-1.523.715-2.763 3.56-2.763 3.56"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystImage2TwoTonecurved;
