import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLight = ({
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
      d="M4.172 16.432a8.9 8.9 0 0 1-1.022-4.155c0-4.972 4.028-9 9-9s9 4.028 9 9c0 1.509-.37 2.939-1.031 4.184"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.416 11.643a3.296 3.296 0 1 1-6.591 0 3.296 3.296 0 0 1 6.591 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.002 20.695c.204-1.586 1.615-3.347 5.118-3.347 3.541 0 4.943 1.77 5.137 3.376"
    />
  </Svg>
);
export default IconlystUserLight;
