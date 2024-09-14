import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeTwoTone = ({
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
      d="M12.498 20.071c3.705 0 7.094-2.664 9.002-7.103-1.908-4.439-5.297-7.103-9.002-7.103-3.701 0-7.09 2.664-8.998 7.103 1.908 4.441 5.297 7.103 9.002 7.103z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.579 12.974a3.077 3.077 0 1 1-6.154-.003 3.077 3.077 0 0 1 6.154.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEyeTwoTone;
