import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoFilterBroken = ({
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
      d="m15.794 14.659-.98.97a1.51 1.51 0 0 0-.495 1.13v1.97c0 .624-.386 1.188-.97 1.416l-1.863.743c-1 .406-2.089-.337-2.089-1.416v-3.199a1.52 1.52 0 0 0-.445-1.08l-2.169-1.925M5.298 4.162a2.63 2.63 0 0 0-1.773 2.506v2.03c0 .99.396 1.94 1.09 2.643M4.14 3l13.301 13.3M10.793 4.002h7.486a2.657 2.657 0 0 1 2.654 2.664v1.346c0 1.06-.446 2.07-1.228 2.783l-1.069 1.05"
    />
  </Svg>
);
export default IconlystNoFilterBroken;
