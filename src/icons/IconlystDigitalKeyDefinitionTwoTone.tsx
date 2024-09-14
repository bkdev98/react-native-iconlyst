import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalKeyDefinitionTwoTone = ({
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
      d="M17.282 19.412V16.59l-1.879-.213-.06-1.674-1.878-.264-.002-1.613-1.067-1.066a4.863 4.863 0 1 0-2.809 2.78l4.874 4.87z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.96 5.757a5.58 5.58 0 0 1 4.03 5.683M15.926 8.765a2.75 2.75 0 0 1 2.057 2.891M6.958 8.97l.01.01m.249-.005a.253.253 0 1 1-.506 0 .253.253 0 0 1 .506 0"
    />
  </Svg>
);
export default IconlystDigitalKeyDefinitionTwoTone;
