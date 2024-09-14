import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingBrokensharp = ({
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
      d="M14.498 3.354a7.97 7.97 0 0 1 7.04 7.032M14.498 6.897a4.43 4.43 0 0 1 3.5 3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.28 14.273c1.793 1.792 3.793 2.34 3.793 2.34l2.854-1.643 4.61 3.4c-.857 1.533-1.939 2.614-3.47 3.472-9.15.419-15.964-9.955-15.017-15.016.868-1.493 1.982-2.598 3.472-3.472l3.24 4.45L8.12 10.66"
    />
  </Svg>
);
export default IconlystCallingBrokensharp;
