import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersGroupTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.81 19.564c-.895 0-1.436-.644-1.474-1.54 0-1.826 1.782-2.456 4.467-2.477 2.69.028 4.477.658 4.467 2.476-.043.897-.58 1.54-1.474 1.54z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.804 13.232a2.335 2.335 0 1 0 0-4.67 2.335 2.335 0 0 0 0 4.67Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.36 10.883c-2.23.017-3.71.54-3.71 2.056.032.745.481 1.28 1.224 1.28h2.888M17.941 10.883c2.23.017 3.71.54 3.71 2.056-.032.745-.482 1.28-1.225 1.28H17.54"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.095 8.315a1.939 1.939 0 1 0 0-3.877 1.939 1.939 0 0 0 0 3.877ZM18.206 8.315a1.939 1.939 0 1 1 0-3.877 1.939 1.939 0 0 1 0 3.877Z"
    />
  </Svg>
);
export default IconlystUsersGroupTwoTone;
