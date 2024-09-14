import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHardwarewalletBroken = ({
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
      d="M5.006 12.218c-.96.96-1.51 2.27-1.51 3.64s.54 2.67 1.51 3.64c.96.96 2.27 1.51 3.64 1.51s2.67-.54 3.64-1.51l5.25-5.25c.45-.45.45-1.17 0-1.62l-5.66-5.66a1.14 1.14 0 0 0-1.62 0l-2.42 2.42M17.116 5.759l-.4.4m2.02 1.21-.4.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.276 7.369 4.04-4.04a1.14 1.14 0 0 1 1.62 0l3.23 3.23c.45.45.45 1.17 0 1.62l-4.04 4.04M9.846 14.649c-.67-.67-1.75-.67-2.42 0s-.67 1.75 0 2.42 1.75.67 2.42 0"
    />
  </Svg>
);
export default IconlystHardwarewalletBroken;
