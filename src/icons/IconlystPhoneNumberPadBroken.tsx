import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneNumberPadBroken = ({
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
      d="M7.69 18.53a1.47 1.47 0 1 1-1.472-1.47M17.31 18.53a1.47 1.47 0 1 0 1.47-1.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.03 18.53a1.47 1.47 0 1 0 2.939.002 1.47 1.47 0 0 0-2.94-.001M4.748 12a1.47 1.47 0 1 0 2.941-.001 1.47 1.47 0 0 0-2.941 0M17.31 12a1.47 1.47 0 1 0 2.94 0 1.47 1.47 0 0 0-2.94 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.97 12a1.47 1.47 0 1 1-1.47-1.47M4.748 5.47A1.47 1.47 0 1 0 6.218 4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.03 5.47a1.47 1.47 0 1 0 2.939.001 1.47 1.47 0 0 0-2.94 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 5.47A1.47 1.47 0 1 1 18.78 4"
    />
  </Svg>
);
export default IconlystPhoneNumberPadBroken;
