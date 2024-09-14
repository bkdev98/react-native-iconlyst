import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedBrokensharp = ({
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
      d="m20.965 5.178-4.853 4.852M16.112 5.178l4.853 4.852"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.28 14.273c1.794 1.792 3.794 2.34 3.794 2.34l2.854-1.643 4.61 3.4c-.857 1.533-1.94 2.614-3.471 3.472-9.15.419-15.963-9.955-15.016-15.016.868-1.493 1.982-2.598 3.472-3.472l3.24 4.45L8.12 10.66"
    />
  </Svg>
);
export default IconlystCallMissedBrokensharp;
