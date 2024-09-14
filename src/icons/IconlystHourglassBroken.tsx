import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHourglassBroken = ({
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
      d="M7.123 17.908c.315.153.702.252 1.215.252 2.079 0 2.079-1.656 4.158-1.656s2.079 1.656 4.158 1.656c.513 0 .9-.1 1.224-.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.473 3h.452c2.04.122 3.091 1.655 2.944 3.509-.122 1.286-1.322 2.457-3.396 4.449q-1.002 1.042 0 2.083c2.074 1.992 3.274 3.164 3.396 4.45.147 1.854-.903 3.387-2.944 3.509h-4.85c-2.041-.122-3.091-1.655-2.944-3.509.122-1.286 1.322-2.458 3.396-4.45q1.001-1.04 0-2.083c-2.074-1.992-3.274-3.163-3.396-4.45-.147-1.853.903-3.386 2.944-3.508h.452"
    />
  </Svg>
);
export default IconlystHourglassBroken;
