import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallReceiveBroken = ({
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
      d="M8.799 15.706c8.088 8.086 10.389 4.582 10.752 4.291 2.89-2.891 1.58-3.347-.704-5.63-2.367-2.365-3.472 2.197-7.19-1.52-3.72-3.717.84-4.825-1.525-7.193C7.848 3.373 7.4 2.054 4.5 4.953c-.261.325-3.112 2.218 2.179 8.465M20.477 8.231l-4.22.01.01-4.22M16.258 8.241 21.499 3"
    />
  </Svg>
);
export default IconlystCallReceiveBroken;
