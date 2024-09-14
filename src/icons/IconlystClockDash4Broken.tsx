import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDash4Broken = ({
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
      d="m15.56 13.915-2.799-1.672V8.632M5.598 6.635a9 9 0 0 1 1.451-1.552M18.381 19.087a8.96 8.96 0 0 1-4.878 1.888 9 9 0 0 1-2.644-.193M7.672 19.362a9 9 0 0 1-3.12-3.783M4.148 9.548a9 9 0 0 0-.299 3.033M20.464 16.723a8.9 8.9 0 0 0 1.345-5.06M20.998 8.252a9.01 9.01 0 0 0-8.537-5.245"
    />
  </Svg>
);
export default IconlystClockDash4Broken;
