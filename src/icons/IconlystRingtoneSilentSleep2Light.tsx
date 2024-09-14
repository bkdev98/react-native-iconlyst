import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep2Light = ({
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
      d="M9.933 19.975A2.69 2.69 0 0 0 12.029 21a2.69 2.69 0 0 0 2.106-1.025M10.543 3.175A6 6 0 0 1 12 3c3.49 0 5.765 2.848 5.765 5.35 0 3.204 1.57 3.036 1.57 5.648-.219 2.622-2.47 3.265-7.335 3.265s-7.117-.651-7.335-3.265c0-1.953.88-2.351 1.322-3.772"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.32 5.123h2.076L6.32 7.411h2.076M10.213 9.44h2.892l-2.892 3.189h2.892"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep2Light;
