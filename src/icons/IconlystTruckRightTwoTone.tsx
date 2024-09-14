import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRightTwoTone = ({
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
      d="M16.697 15.266V6.98a2.08 2.08 0 0 0-2.08-2.08H5.549C4.418 4.9 3.5 5.818 3.5 6.95v8.155a2.08 2.08 0 0 0 2.08 2.08M9.469 17.183h5.31M18.613 17.183h.808a2.08 2.08 0 0 0 2.079-2.08V11.66c0-.936-.553-1.784-1.41-2.162l-3.393-1.497"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.098 12.41h2.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.47 17.182a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.833 0M18.615 17.182a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.834 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.984 11.878 1.582-1.578m0 0-1.582-1.575m1.582 1.575-4.937.001"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTruckRightTwoTone;
