import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.497 3.354a7.97 7.97 0 0 1 7.04 7.032M14.497 6.897a4.43 4.43 0 0 1 3.5 3.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M18.066 21.842C8.916 22.26 2.103 11.887 3.05 6.826c.868-1.493 1.982-2.598 3.472-3.472l3.24 4.451L8.12 10.66s.453 1.906 2.161 3.614c1.793 1.792 3.793 2.34 3.793 2.34l2.854-1.643 4.61 3.4c-.857 1.532-1.939 2.614-3.471 3.472Z"
    />
  </Svg>
);
export default IconlystCallingTwoTonesharp;
