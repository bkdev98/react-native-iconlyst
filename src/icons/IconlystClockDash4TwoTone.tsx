import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDash4TwoTone = ({
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
      d="m15.56 13.916-2.798-1.672V8.633"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.598 6.634a9 9 0 0 1 1.451-1.552M18.382 19.086a9 9 0 0 1-7.522 1.695M7.672 19.36a9 9 0 0 1-3.12-3.782M4.148 9.547a9 9 0 0 0-.299 3.033M20.464 16.723a8.9 8.9 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.348-8.656"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystClockDash4TwoTone;
