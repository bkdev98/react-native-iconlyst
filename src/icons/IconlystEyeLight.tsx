import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 19c3.705 0 7.094-2.625 9.002-7-1.908-4.375-5.297-7-9.002-7C8.297 5 4.908 7.625 3 12c1.908 4.377 5.297 7 9.002 7z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.079 12.005c0 1.673-1.378 3.032-3.076 3.032-1.7 0-3.077-1.359-3.077-3.032s1.378-3.032 3.077-3.032c1.698 0 3.076 1.358 3.076 3.032"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEyeLight;
