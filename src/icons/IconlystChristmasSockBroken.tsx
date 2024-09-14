import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasSockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.381 10.869v4.374a2.93 2.93 0 0 1-1.367 2.477l-5.116 3.224a4.36 4.36 0 0 1-5.495-.697c-1.973-2.09-1.419-5.484 1.116-6.838l1.869-.998a.09.09 0 0 0 .047-.08V8.389M13.428 11.718v4.168M15.232 12.76l-3.61 2.085M15.232 14.845l-3.61-2.085"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.515 15.64c1.988.404 3.945 1.614 4.924 3.367M14.721 8.278h2.909c1.052 0 1.904-.624 1.904-1.654l.001-1.355c0-1.03-.853-1.654-1.905-1.654H9.814c-1.053 0-1.905.623-1.905 1.654l-.001 1.355c0 1.03.853 1.654 1.905 1.654h1.954M13.72 3.615V5.33M10.647 3.615V5.33M16.797 3.615V5.33"
    />
  </Svg>
);
export default IconlystChristmasSockBroken;
